import React from 'react';

function Advice(){

    return(
        <div className="content-box">
            <div className="lifestyle-choices">  
                <div className="category">
                    <h5 className="category-title">Experiences</h5>
                    <div className="category-section">
                        <p>This section is dedicated to people who have suffered in many ways related to mental health. They are brave enough to share their journey for you to read.</p>
                    </div>
                </div>
        
                <div className="category">
                    <h5 className="category-title">Embracing the Darkness, Finding the Light</h5>
                    <div className="category-section">
                        <p className="category-subheading">
                            Anna never thought anxiety would overtake her life, but at 25, she found herself unable to leave her home. Every day was a battle against her own mind, the smallest tasks feeling impossible. Therapy and support from friends allowed her to reclaim her independence step-by-step. Today, she continues her journey with courage, reminding others that small steps can lead to big changes.
                        </p>
                        <p className="category-subheading"><strong>- Anna Rodriguez</strong></p>
                    </div>
                </div>
        
                <div className="category">
                    <h5 className="category-title">Rising from Rock Bottom</h5>
                    <div className="category-section">
                        <p className="category-subheading">
                            John struggled in silence, thinking no one would understand his depression. It wasn’t until he reached out to a mental health helpline that he found his first step toward healing. Through therapy, mindfulness practices, and building a support network, John slowly found himself again. His journey wasn’t easy, but he learned he wasn’t alone—and that there’s always hope, even in the darkest times.
                        </p>
                        <p className="category-subheading"><strong>- John Mitchell</strong></p>
                    </div>
                </div>
        
                <div className="category">
                    <h5 className="category-title">Breaking the Chains of Perfection</h5>
                    <div className="category-section">
                        <p className="category-subheading">
                            Leah was known for her success, but behind the achievements was a relentless need for perfection that led to burnout. Her battle with high-functioning anxiety left her exhausted and overwhelmed. With help from a therapist and support from her family, she learned to set boundaries and embrace self-compassion. Leah now shares her story to encourage others to prioritize their well-being over perfection.
                        </p>
                        <p className="category-subheading"><strong>- Leah Anderson</strong></p>
                    </div>
                </div>
            </div>            
        
            <header>
                <h1>Videos/Blogs</h1>
                <p>These are some of the best, most profound, and welcoming videos of the week!</p>
            </header>
        
            <div className="stickers">
                <div className="reactive_text_box_secondary">
                    <h2>Very Welcoming Channel</h2>
                    <div className="video_container">
                        <iframe className="src_video" title="V1" src="https://www.youtube.com/embed/3QIfkeA6HBY"></iframe>
                    </div>
                </div>
        
                <div className="reactive_text_box_secondary">
                    <h2>TED - Recommended for Everyone</h2>
                    <div className="video_container">
                        <iframe className="src_video" title="V2" src="https://www.youtube.com/embed/BvpmZktlBFs"></iframe>
                    </div>
                </div>
        
                <div className="reactive_text_box_secondary">
                    <h2>Newer, Friendly Channel</h2>
                    <div className="video_container">
                        <iframe className="src_video" title="V3" src="https://www.youtube.com/embed/bkRuRfjNQr4"></iframe>
                    </div>
                </div>
            </div>   
        </div> 
    );
}

export default Advice;