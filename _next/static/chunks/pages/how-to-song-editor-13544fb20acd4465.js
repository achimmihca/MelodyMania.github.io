(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{3746:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to-song-editor",function(){return i(2649)}])},1374:function(e,n,i){"use strict";var s=i(5893),t=i(9886);let o=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",id:"mainNav",style:{paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:(0,s.jsxs)("div",{className:"container px-5",children:[(0,s.jsx)("a",{className:"navbar-brand fw-bold",href:"#page-top",children:e.title}),(0,s.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",(0,s.jsx)("i",{className:"bi-list"})]}),(0,s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:(0,s.jsx)("ul",{className:"navbar-nav ms-auto me-4 my-3 my-lg-0",children:(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.Z,{className:"nav-link me-lg-3",href:"/",children:"Home"})})})})]})})});n.Z=o},2533:function(e,n,i){"use strict";var s=i(5893),t=i(1374);let o=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.Z,{title:"Melody Mania"}),(0,s.jsx)("div",{className:"mdx-content ".concat(e.additionalClasses," "),children:(0,s.jsx)("div",{className:"section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-lg-6",children:e.children})})})})})]});n.Z=o},9886:function(e,n,i){"use strict";var s=i(5893);i(7294);var t=i(1664),o=i.n(t),r=i(1163);let l=e=>{let{children:n,skipLocaleHandling:i,...t}=e,l=(0,r.useRouter)(),c=t.locale||l.query.locale||"",a=t.href||l.asPath;return 0===a.indexOf("http")&&(i=!0),c&&!i&&(a=a?"/".concat(c).concat(a):l.pathname.replace("[locale]",c)),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o(),{...t,href:a,children:n})})};n.Z=l},2649:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var s=i(5893),t=i(1151),o=i(2533);let r=e=>(0,s.jsxs)("video",{controls:!0,children:[(0,s.jsx)("source",{src:e.src,type:"video/mp4"}),"Your browser does not support the video tag."]}),l=e=>{let{children:n}=e;return(0,s.jsx)(o.Z,{additionalClasses:"how-to-song-editor",children:n})};function c(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",em:"em"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Song Editor"}),"\n",(0,s.jsx)(n.p,{children:"Melody Mania includes an editor that can be used to create a sing-along version of any song."}),"\n",(0,s.jsx)(n.p,{children:"The following shows how to use the editor."}),"\n",(0,s.jsx)(n.h2,{children:"View Shortcuts and Controls"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The help dialog shows all available shortcuts and controls"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/view-controls-help.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Split Audio to Isolate Vocals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click the button in the left side bar to split vocals audio and instrumental audio"}),"\n",(0,s.jsx)(n.li,{children:"Afterwards, speech recognition and pitch detection can be performed on the vocals audio"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/split-audio.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Change Playback Audio"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can select which audio should be played: the original music, vocals, insturmental, or your mircophone recording"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/change-playback-audio.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Dictate Lyrics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configure a microphone and click the recording button"}),"\n",(0,s.jsx)(n.li,{children:"Speak clearly in the microphone to dictate lyrics"}),"\n",(0,s.jsx)(n.li,{children:"TIP: You can change the language for speech recognition by changing path to the model."}),"\n",(0,s.jsxs)(n.li,{children:["TIP: More speech recognition models are available for download ",(0,s.jsx)(n.a,{href:"https://alphacephei.com/vosk/models",children:"here"})]}),"\n",(0,s.jsx)(n.li,{children:"TIP: Your recorded audio is shown in red in the overview bar at the bottom"}),"\n",(0,s.jsx)(n.li,{children:"NOTE: The speech recognition models have not been trained on singing data. Thus, you may achieve better results by dictating lyrics and speaking clearly, without singing."}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/dictate-lyrics.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Speech Recognition in Selection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As alternative to dictating lyrics, you can run the speech recognition on the vocals audio"}),"\n",(0,s.jsxs)(n.li,{children:["Select a range or hit ",(0,s.jsx)(n.code,{children:"Ctrl+A"})," to select all"]}),"\n",(0,s.jsx)(n.li,{children:"Click the button in the settings to do speech recognition on the last selected range"}),"\n",(0,s.jsx)(n.li,{children:"NOTE: The speech recognition models have not been trained on singing data. Thus, you may achieve better results by dictating lyrics and speaking clearly, without singing."}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/speech-recognition-in-selection.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Import LRC Lyrics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can import lyrics in ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/LRC_(file_format)",children:"LRC format"})]}),"\n",(0,s.jsxs)(n.li,{children:["TIP: Lyrics in LRC format can be found for example on ",(0,s.jsx)(n.a,{href:"https://lyricsify.com/",children:"lyricsify.com"})]}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/import-lrc-format.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Edit Lyrics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Double click a note or phrase to open its lyrics dialog"}),"\n",(0,s.jsx)(n.li,{children:"Or use the right click context menu to open the lyrics dialog"}),"\n",(0,s.jsxs)(n.li,{children:["Switch to edit mode in the lyrics area to edit the lyrics of the whole song","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NOTE: Only notes that have been assigned to a player (P1 or P2) are shown in the lyrics area"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"TIP: You can split a note with space and semicolon when editing a note's lyrics"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Special characters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"semicolon"})," can be used to separate syllables."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"space"})," is shown as circle and can be used to separate words."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"line break"})," is shown as arrow-left and can be used to separate phrases."]}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/edit-lyrics.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Pitch Detection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Move notes to detected pitch using the right click context menu on a note or phrase."}),"\n",(0,s.jsx)(n.li,{children:"Show detected pitch values using the right click context menu on a phrase or using the corresponding button in the settings."}),"\n",(0,s.jsx)(n.li,{children:"TIP: You can change the audio that is used for pitch detection in the settings (default: vocals audio)."}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/pitch-detection.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Select Cover, Background, Video"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click the preview of the cover, background, or video to change it"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/select-cover-background-video.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Draw to Add Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select an empty range to deselect all notes"}),"\n",(0,s.jsxs)(n.li,{children:["Hold ",(0,s.jsx)(n.code,{children:"Shift"})," while dragging to draw new notes"]}),"\n",(0,s.jsx)(n.li,{children:"TIP: The target layer for new notes can be changed in the settings"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/draw-to-add-notes.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Button Tapping to Add Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start playback then press the corresponding button to add notes"}),"\n",(0,s.jsx)(n.li,{children:"TIP: Reduce the playback speed for better accuracy"}),"\n",(0,s.jsx)(n.li,{children:"TIP: The used button can be changed in the settings"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/button-tapping-to-add-notes.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Assign Notes to Player"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Assign selected notes to a player using the right click context menu"}),"\n",(0,s.jsx)(n.li,{children:"NOTE: Only notes that have been assigned to a player are saved to the file!"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/assign-notes-to-player.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Adjust Following Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enable this option to move following notes accordingly"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/adjust-following-notes.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Note Layers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can hide / show the notes of a layer in the layer menu"}),"\n",(0,s.jsx)(n.li,{children:"You can lock / unlock the notes of a layer in the layer menu. The notes of a locked layer can not be edited."}),"\n",(0,s.jsx)(n.li,{children:"You can select all the notes of a layer in the layer menu"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/note-layers.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Play MIDI Sounds"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Hold ",(0,s.jsx)(n.code,{children:"Ctrl"})," while you click on a note to preview its pitch"]}),"\n",(0,s.jsx)(n.li,{children:"Use the virtual piano to hear a MIDI sound of that pitch"}),"\n",(0,s.jsx)(n.li,{children:"MIDI sounds during playback can be enabled / disabled in the settings"}),"\n",(0,s.jsx)(n.li,{children:"TIP: MIDI sound during playback can be enabled / disabled per layer in the layer menu"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/midi-sounds.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Import MIDI / KAR File"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can import lyrics and notes from a MIDI file (aka. KAR file if the MIDI file contains lyrics)"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/import-midi-file.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Fix Warnings and Errors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click on a warning / error to view its message"}),"\n",(0,s.jsx)(n.li,{children:"Click on a warning / error in the menu to jump to its position"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/warning-and-error-markers.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Change GAP (aka. Time to First Lyrics)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change the GAP (i.e. the time to first lyrics) using the right click context menu"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/set-gap.webm"}),"\n",(0,s.jsx)(n.h2,{children:"Change Video Offset"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change the video offset by dragging left / right on the video preview"}),"\n",(0,s.jsx)(n.li,{children:"Reset the video offset using the right click context menu on the video preview"}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/videos/song-editor/video-offset.webm"})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(l,Object.assign({},e,{children:(0,s.jsx)(c,e)}))}},1151:function(e,n,i){"use strict";i.d(n,{ah:function(){return o}});var s=i(7294);let t=s.createContext({});function o(e){let n=s.useContext(t);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=3746)}),_N_E=e.O()}]);