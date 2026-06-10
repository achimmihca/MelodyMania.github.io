# PowerShell script to convert all mp4 files in the current folder to webm format.
Get-ChildItem -Filter *.mp4 | ForEach-Object {
     ffmpeg -i $_.FullName `
        -c:v libsvtav1 -crf 38 -preset 6 `
        -r 24 `
        -pix_fmt yuv420p `
        -g 240 `
        -an `
        "$($_.BaseName).webm"
}