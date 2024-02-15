// script.js
let chapters = [];

function addChapter() {
    // Retrieve chapter information from input fields
    const chapterNumber = document.getElementById('chapterNumber').value;
    const chapterTitle = document.getElementById('chapterTitle').value;
    const locale = document.getElementById('locale').value;
    const timeDay = document.getElementById('Time of day').value;
    const timeYear = document.getElementById('Time of year').value;
    const timeChar = document.getElementById('Time passed since previous scene with this character').value;
    const povChar = document.getElementById('POV character for the scene').value;
    const sceneSummary = document.getElementById('Scene Summary').value;
    const storyAdvance = document.getElementById('What main way is the story advanced? What new plot points are revealed?').value;
    const conflictObstacles = document.getElementById('What conflicts/obstacles are presented in the scene?').value;
    const highMoment = document.getElementById('The high moment or key info revealed in scene').value;
    const worldBuilding = document.getElementById('World-building or specific setting/locale details brought out').value;
    // Get other chapter information in a similar way

    // Create a chapter object
    const chapter = {
        number: chapterNumber,
        title: chapterTitle,
        locale: locale,
        time: timeDay,
        date: timeYear,
        char: povChar,
        summary: sceneSummary,
        advance: storyAdvance,
        conflict: conflictObstacles,
        high: highMoment,
        world: worldBuilding,
        // Include other properties based on your needs
    };

    // Add the chapter to the array
    chapters.push(chapter);

    // Clear input fields for the next chapter
    document.getElementById('chapterNumber').value = '';
    document.getElementById('chapterTitle').value = '';
    document.getElementById('locale').value = '';
    document.getElementById('Time of day').value = '';
    document.getElementById('Time of year').value = '';
    document.getElementById('Time passed since previous scene with this character').value = '';
    document.getElementById('POV character for the scene').value = '';
    document.getElementById('Scene Summary').value = '';
    document.getElementById('What main way is the story advanced? What new plot points are revealed?').value = '';
    document.getElementById('What conflicts/obstacles are presented in the scene?').value = '';
    document.getElementById('The high moment or key info revealed in scene').value = '';
    document.getElementById('World-building or specific setting/locale details brought out').value = '';
    // Clear other input fields similarly
}

function downloadOutline() {
   // Generate the outline content based on the chapters array
   const outlineContent = generateOutlineContent();

   // Create a Blob containing the outline content
   const blob = new Blob([outlineContent], { type: 'text/plain' });

   // Create a download link and trigger the download
   const downloadLink = document.createElement('a');
   downloadLink.href = URL.createObjectURL(blob);
   downloadLink.download = 'novel_outline.txt';
   downloadLink.click();
}

function generateOutlineContent() {
   // Create the outline content based on the chapters array
   let outlineContent = '';

   chapters.forEach((chapter, index) => {
       outlineContent += `**Chapter ${chapter.number}: ${chapter.title}**\n`;
       outlineContent += `Locale: ${chapter.locale}\n`;
       outlineContent += `Time of Day: ${chapter.time}\n`;
       outlineContent += `Time of Year: ${chapter.date}\n`;
       outlineContent += `Chapter Summery: ${chapter.summary}\n`;
       outlineContent += `How is the Story Advanced?: ${chapter.advance}\n`;
       outlineContent += `What conflict(s) drive the chapter forward?: ${chapter.conflict}\n`;
       outlineContent += `What is the high point of the chapter?: ${chapter.high}\n`;
       outlineContent += `What worldbuilding is crucial to include?: ${chapter.world}\n`;
       // Include other chapter information in a similar way

       outlineContent += '\n'; // Add spacing between chapters
   });

   return outlineContent;
}
