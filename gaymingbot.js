var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: ""
});


// listen on messages
bot.on('message', function(user, userID, channelID, message, event) {
    
// setting the game 


    bot.setPresence({
    game: {
        name: "with my robot cock"
    }
});
    
    
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //chat event
    if (message === "!chat-event") {
        bot.sendMessage({
            to: channelID,
            message: "Hey we have a chat event starting real soon! Be sure to head into the Chat Event voice chat to join in!"
        });
    
    }
    
      /////////////////
      
    //test
    if (message === "!gay") {
        bot.sendMessage({
            to: channelID,
            message: "YES PLEASE :fist: "
        });
    }
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//donate
    if (message === "!donate") {
        bot.sendMessage({
            to: channelID,
            message: "Thanks for choosing to donate <@" + userID + ">. You may donate at the following link http://www.gayming.xyz/donate"
        });
    }
    
	 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
	//rules
    if (message === "!rules") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\n \nVoice Chat Rules: >\n \n ➤ Sexual Noises will result in ban. \n \n➤ Voice Spam will result in kick. \n \n➤ Racism  will result in perma ban. \n \n \nChat Rules:\n \n➤ Be a decent human being and treat others with respect.\n \n➤ Discrimination, harassment, hate, and/or bigotry will not be tolerated.\n \n➤ Please do not encourage drug, alcohol, substance abuse, or harmful behavior.\n \n➤ No offensive profile names.\n \n➤ No advertising, of any kind, is allowed. (Unless given permission)\n \n➤ No politics/ religion /  whatsoever. (Except for the #politics channel, the religion rules still apply)  If you do not wish to take part.  Please mute this channel \n \n➤ Don't post nudes.\n \nMembers that break any of the above rules will be given 1 warning of 3. On your final warning you will be banned from the Discord. :smile:"                                                                                                                                                                                                                                                                                                                          
        });
    }
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
	//twitter
    if (message === "!twitter") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\n Our twitter is @GaymingXYZ \n https://twitter.com/GaymingXYZ "
        });
    }
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //facebook
    if (message === "!facebook") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\n Our facebook is:\n https://www.facebook.com/Gaymingxyz-818986501536786/"
        });
    }
    
    /////////////////
    
     if (message === "!fb") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\n Our facebook is:\n https://www.facebook.com/Gaymingxyz-818986501536786/"
        });
    }
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
     //tumblr
    if (message === "!tumblr") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nOur tumblr is: \nhttp://gaymingxyz.tumblr.com/"
        });
    }
    
    /////////////////
    
     if (message === "!nsfw") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nDue to a chnage in the Discord TOS, we can no longer serve you guys a NSFW channel on Disord. We have now started a tumblr because of this where you can submit your own posts! \nOur tumblr is: \nhttp://gaymingxyz.tumblr.com/"
        });
    }
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
      //instagram
    if (message === "!instagram") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nOur instagram is:\n https://www.instagram.com/gayming_/ "
        });
    }
    
    /////////////////
    
    if (message === "!insta") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nOur instagram is:\n https://www.instagram.com/gayming_/ "
        });
    }
    
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
	//steam
    if (message === "!steam") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nOur steam is \n https://steamcommunity.com/groups/gaymingxyz "
        });
    }
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    	//website
    if (message === "!website") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nOur website is:\n http://gayming.xyz/  "
        });
    }
    
    /////////////////
    
     if (message === "!community") {
        bot.sendMessage({
            to: channelID,
            message: " <@" + userID + ">\nOur website is:\n http://gayming.xyz/community  "
        });
    }
    
	
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
	//help
	if (message === "!helpme"){
		bot.sendMessage({
			to: channelID,
			message: "<@" + userID + "> you just got a direct message from me! :wink: "
		});
        
         /////////////////


		bot.sendMessage({
		to: userID,
		message: "Here are all the commands that the Gayming Bot includes: \n\n 1. **!donate** :: Provides a donate now link! \n 2. **!rules** :: Provides a list of all of Gayming's Rules! \n 3. **!twitter** :: Provides a link to Gayming's Twitter! \n 4. **!facebook (!fb)** :: Provides a link to Gayming's Facebook! \n 5. **!tumblr (!nsfw)** :: Provides a link to Gayming's Tumblr! \n 6. **!instagram (!insta)** :: Provides a link to Gayming's Instagram! \n 7. **!steam** :: Provides a link to Gayming's Steam! \n 8. **!website (!community)** :: Provides a link to Gayming's Website!"
		});
	}
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});
