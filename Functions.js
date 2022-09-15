
const VideoAdresses =
[
    "Videos\Past Games\CamoChameleon.mp4",
    "Videos\Past Games\Fireflies.mp4",
    "Videos\Past Games\Goating Up.mp4",
    "Videos\Past Games\Kleptomaniacs.mp4",
    "Videos\Past Games\Lineup.mp4",
    "Videos\Past Games\Magnitude9.mp4",
    "Videos\Past Games\The Event Loop of Life.mp4"
]


function GenerateListItems(arg)
{
    let items = "";



    for (let i = 0; i < arg.length; i++)
    {
        items += "<video width=" 640" height="480" autoplay muted loop";
        items += "<source src="="video/mp4">";
        items += "</video>";    
    }

    return items;
}


function GenerateVideos()
{
    GenerateListItems(VideoAdresses);
}