export default function Stories() {

    const storyImg = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
    
    const Story = (props) => {
        
        return (
            <div className="story">
                <div className="imagem">
                    <img src={"/assets/img/" + props.storyImg + ".svg"} />
                </div>
                <div className="usuario">
                    {props.storyImg}
                </div>
            </div>
        )    
    }

    return (
        <div className="stories">
            {storyImg.map(story => <Story storyImg={story}/>)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
        
        
    )
}