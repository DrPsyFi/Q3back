const TABLE_NAME = 'lyrics'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert(
        [
          {
            "id": 1,
            "songName": "Black Hole Sun",
            "artistName": "Soundgarden",
            "songText": "In my eyes, indisposed\nIn disguise as no one knows\nHides the face, lies the snake\nIn the sun in my disgrace\nBoiling heat, summer stench\n'Neath the black the sky looks dead\nCall my name through the cream\nAnd I'll hear you scream again\n\nBlack hole sun\nWon't you come\nAnd wash away the rain\nBlack hole sun\nWon't you come\nWon't you come\nWon't you come\n\nStuttering, cold and damp\nSteal the warm wind tired friend\nTimes are gone for honest men\nAnd sometimes far too long for snakes\nIn my shoes, a walking sleep\nAnd my youth I pray to keep\nHeaven send Hell away\nNo one sings like you anymore\n\nBlack hole sun\nWon't you come\nAnd wash away the rain\nBlack hole sun\nWon't you come\nWon't you come\nBlack hole sun\nWon't you come\nAnd wash away the rain\nBlack hole sun\nWon't you come\nWon't you come\n\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\n\nHang my head, drown my fear\nTill you all just disappear\n\nBlack hole sun\nWon't you come\nAnd wash away the rain\nBlack hole sun\nWon't you come\nWon't you come\nBlack hole sun\nWon't you come\nAnd wash away the rain\nBlack hole sun\nWon't you come\nWon't you come\n\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nBlack hole sun, black hole sun\nWon't you come\nWon't you come",
            "artistImg": "https://www.gettyimages.com/detail/news-photo/photo-of-soundgarden-news-photo/85847547",
            "users_id": 1
          }, {
            "id": 2,
            "songName": "Work Bitch",
            "artistName": "Britney Spears",
            "songText": "You wanna\nYou wanna\n\nYou want a hot body?\nYou want a Bugatti?\nYou want a Maserati?\nYou better work bitch\n\nYou want a Lamborghini?\nSip martinis?\nLook hot in a bikini?\nYou better work bitch\n\nYou wanna live fancy?\nLive in a big mansion?\nParty in France?\nYou better work bitch\n\nYou better work bitch\nYou better work bitch\nYou better work bitch\nNow get to work bitch!\n\nAh, ah, now get to work bitch\nAh, ah\n\nBring it on\nRring the alarm\nDon't stop now\nJust be the champion\nWork it hard\nLike it's your profession\nWatch out now\nCause here it comes\n\nHere comes the smasher\nHere comes the master\nHere comes the big beat\nBig beat to blast ya\nNo time to quit now\nJust time to get it now\nPick up what I'm puttin' down\nPick up what I'm puttin' down\n\nYou want a hot body?\nYou want a Bugatti?\nYou want a Maserati?\nYou better work bitch\n\nYou want a Lamborghini?\nSip martinis?\nLook hot in a bikini?\nYou better work bitch\n\nYou wanna live fancy?\nLive in a big mansion?\nParty in France?\nYou better work bitch\n\nYou better work bitch\nYou better work bitch\nYou better work bitch\nNow get to work bitch\n\nAh, ah, now get to work bitch\nAh, ah\n\nBreak it up\nBreak it down\nSee me comin'\nYou can hear my sound\nTell somebody in your town\nSpread the word\nSpread the word\n\nGo call the police\nGo call the governor\nI bring the trouble\nDon't mean the trouble ya\nI make the bubble up\nCall me the bubbler\nI am the bad bitch\nThe bitch that you lovin' up\n\nHold your head high, fingers to the sky\nThey gon' try and try ya'\nBut they can't deny ya'\nKeep it moving higher, and higher\nKeep it moving higher, and higher\n\nSo hold your head high, fingers to the sky\nNow they don't believe ya', but they gonna need ya'\nKeep it moving higher, and higher\nKeep it moving higher, and higher, and higher\n\nWork, work, work, work\nWork, work, work, work\nWork, work, work, work\nWork, work, work, work\n\nWork it out, work it out, work it out, work it out\nWork it out, work it out, work it out, work it out\nWork it out, work it out, work it out, work it out\nWork it out, work it out, work it out, work it out\nWork it out\nYou better work bitch\nYou better work bitch",
            "artistImg": "https://juaanr.deviantart.com/art/Britney-Spears-Work-Bitch-412762417",
            "users_id": 4
          }, {
            "id": 3,
            "songName": "Dazed and Confused",
            "artistName": "Led Zeppelin",
            "songText": "[Chorus]\nBeen dazed and confused for so long it's not true\nWanted a woman, never bargained for you\nLots of people talk and few of them know\nSoul of a woman was created below, yeah\n\n[Verse 1]\nYou hurt and abuse telling all of your lies\nRun around sweet baby, Lord how they hypnotize\nSweet little baby, I don't know where you've been\nGonna' love you baby, here I come again\n\n[Extra Verse]\nIf you're going to San Francisco\nBe sure to wear some flowers in your hair\nIf you're going to San Francisco\nYou're gonna meet a lot of gentle people there\n\n[Verse 2]\nEvery day I work so hard bringing home my hard earned pay\nTry to love you baby, but you push me away\nDon't know where you're going, only know just where you've been\nSweet little baby, I want you again\n\n[Guitar Solo]\n\n[Chorus]\nBeen dazed and confused for so long it's not true\nWanted a woman, never bargained for you\nTake it easy baby, let them say what they will\nDid your tongue wag so much when I sent you the bill?",
            "artistImg": "https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/ledzeppelin1973_gruen_webuseonly.jpg?itok=6FZA_P3p",
            "users_id": 1
          }, {
            "id": 4,
            "songName": "Gasoline",
            "artistName": "Audioslave",
            "songText": "House is haunted\nI just want to go for a ride\nOut and on\nBefore I set this room alright\nLeft alone forever and for crimes unclear\nWith my patience gone\nSomeone take me far from here\n\nBurning that gasoline\n\nNew day yawning another day of solitaire\nHouse is honest\nClearly more than I can bear\nDrag me off\nBefore I set my world on fire\nOut and gone the sun will never\nSet tonight\n\nBurning that gasoline\n\nNow what for's, only a can\nOf Red says danger on it\nI have found another way\nBurning that gasoline\n\nBurning that gasoline",
            "artistImg": "https://i.ytimg.com/vi/CCgfejwbkXE/hqdefault.jpg",
            "users_id": 3
          }, {
            "id": 5,
            "songName": "Bad and Boujee",
            "artistName": "Migos",
            "songText": "You know Young Rich Niggas
            You know so we ain't really never had no old money
            We got a whole lotta new money though
            (If Young Metro don't trust you I'm gon' shoot ya)
            Raindrops, drop tops (drop top)
            Smokin' on cookie in the hotbox (cookie)
            Fuckin' on your bitch she a thot, thot, thot (Thot)
            Cookin' up dope in the crockpot, (pot)
            We came from nothin' to somethin' nigga (hey)
            I don't trust nobody, grip the trigger (nobody)
            Call up the gang, they come and get you (gang)
            Cry me a river, give you a tissue (hey)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (blaow)
            My niggas is savage, ruthless (savage)
            We got 30's and 100 rounds too (grrah)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (dope)
            My niggas is savage, ruthless (hey)
            We got 30's and 100 rounds too (glah)
            Offset, woah, woah, woah, woah, woah
            Rackings on rackings, got backends on backends
            I'm ridin' around in a coupe (coupe)
            I take your bitch right from you (you)
            Bitch I'm a dog, woof (grrr)
            Beat the ho walls loose (hey)
            Hop in the frog, woah (skrt)
            I tell that bitch to come for me (come for me)
            I swear these niggas under me (hey)
            They hate and the devil keep jumpin' me (jumpin' me)
            Bankrolls on me keep me company (cash)
            We did the most, yeah
            Pull up in Ghosts, yeah (woo)
            My diamonds a choker (glah)
            Holdin' the fire with no holster (blaow)
            Rick The Ruler, diamonds cooler (cooler)
            This a Rollie not a Mueller (hey)
            Dabbin' on 'em like the usual (dab)
            Magic with the brick, do voodoo (magic)
            Court side with a bad bitch (bitch)
            Then I send the bitch through Uber (go)
            I'm young and rich and plus I'm boujee (hey)
            I'm not stupid so I keep the Uzi (rrrah)
            Rackings on rackings, got backends on backends
            So my money makin' my back ache
            You niggas got a low Act' rate (Act')
            We from the Nawf, yeah dat way (Nawf)
            Fat cookie blunt in the ash tray (cookie)
            Two bitches, just national smash day (smash)
            Hop in the Lamb', have a drag race (skrt)
            I let them birds take a bath bae (brrrrr)
            Raindrops, drop tops (drop top)
            Smokin' on cookie in the hotbox (cookie)
            Fuckin' on your bitch she a thot, thot, thot (thot)
            Cookin' up dope in the crockpot, (pot)
            We came from nothin' to somethin' nigga (hey)
            I don't trust nobody, grip the trigger (nobody)
            Call up the gang, they come and get you (gang)
            Cry me a river, give you a tissue (hey)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (blaow)
            My niggas is savage, ruthless (savage)
            We got 30's and 100 rounds too (grrah)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (dope)
            My niggas is savage, ruthless (hey)
            We got 30's and 100 rounds too (glah)
            Pour a four, I'm droppin' muddy
            Outer space, KiD CuDi (drank)
            Introduce me your bitch ass wifey and we know she sluttin'
            Broke a brick down, nutty buddy, now that nigga duckin'
            Don't move too fast I might shoot you (huh?)
            Draco bad and boujee (Draco)
            I'm always hangin' with shooters (brrah)
            Might be posted somewhere secluded (private)
            Still be playin' with pots and pans, call me Quavo Ratatouille
            Run with that sack, call me Boobie (run with it)
            When I'm on stage show me boobies (ay)
            Ice on my neck, I'm the coolest (ice)
            Hop out the suicide with the Uzi (pew-pew-pew)
            I pull up, I pull up, I pull up
            I hop out with all of the drugs in the cooler (skrt)
            I'm cookin', I'm cookin', I'm whippin', I'm whippin' into a rock up, let it lock up (lock up)
            I gave her 10 racks, I told her go shoppin' and spend it all at the pop up (ten)
            These bitches they fuck and suck dick and they bustin' for Instagram, get your clout up
            Uh, yeah, dat way, float on the track like a Segway (go)
            Yeah, dat way, I used to trap by the subway (trappin')
            Yeah, dat way, young nigga trap with the AK (rrrah)
            Yeah, dat way, big dyke ho get it on, Macy Gray (hey)
            Raindrops, drop tops (drop top)
            Smokin' on cookie in the hotbox (cookie)
            Fuckin' on your bitch she a thot, thot, thot (thot)
            Cookin' up dope in the crockpot, (pot)
            We came from nothin' to somethin' nigga (hey)
            I don't trust nobody, grip the trigger (nobody)
            Call up the gang, they come and get you (gang)
            Cry me a river, give you a tissue (hey)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (blaow)
            My niggas is savage, ruthless (savage)
            We got 30's and 100 rounds too (grrah)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (dope)
            My niggas is savage, ruthless (hey)
            We got 30's and 100 rounds too (glah)
            Yeah, yeah, yeah, yeah, my bitch she bad to the bone, ay
            Wait, these niggas watchin', I swear to God they be my clones
            Yeah, hey, huh, switchin' my hoes like my flows (what?)
            Switchin' my flows like my clothes (like what?)
            Keep on shootin' that gun, don't reload
            Oh, oh, now she won't fuck with my crew
            'Cause the money come all out the roof
            Drive the 'Rari, that bitch got no roof (skrt)
            Wait, what kind of 'Rari? 458 (damn)
            All of these niggas, they hate (they hate)
            Try to hide, shoot through the gate
            Look, go to the strip club, make it rain (rain)
            So much money they use rakes
            Count 100, 000 in your face (in your face)
            Yeah, they put 300 right in the safe
            Met her today, oh
            She talk to me like she knew me, yah
            Go to sleep in a jacuzzi, yah
            Yeah, wakin' up right to a two piece, yah
            Countin' that paper like loose leaf, yah
            Gettin' that chicken with blue cheese, yah
            Yeah, boy you so fake like my collar
            You snakin', I swear to God that be that Gucci, ay
            And you know we winnin' (winnin')
            Yeah, we is not losin'
            Try to play your song, it ain't move me (what?)
            Saw your girl once now she choose me, yeah
            Raindrops, drop tops (drop top)
            Smokin' on cookie in the hotbox (cookie)
            Fuckin' on your bitch she a thot, thot, thot (thot)
            Cookin' up dope in the crockpot, (pot)
            We came from nothin' to somethin' nigga (hey)
            I don't trust nobody, grip the trigger (nobody)
            Call up the gang, they come and get you (gang)
            Cry me a river, give you a tissue (hey)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (blaow)
            My niggas is savage, ruthless (savage)
            We got 30's and 100 rounds too (grrah)
            My bitch is bad and boujee (bad)
            Cookin' up dope with a Uzi (dope)
            My niggas is savage, ruthless (hey)
            We got 30's and 100 rounds too (glah)",
            "artistImg": "https://images.genius.com/6515e8a719a82207ce298b4709fbc1cc.500x634x1.png",
            "users_id": 5
          }, {
            "id": 6,
            "songName": "Rooster",
            "artistName": "Alice In Chains",
            "songText": "Ain't found a way to kill me yet\nEyes burn with stinging sweat\nSeems every path leads me to nowhere, Mmm\nWife and kids household pet\nArmy green was no safe bet\nThe bullets scream to me from somewhere, Mmm\n\nYeah they come to snuff the rooster\nYeah here come the rooster, yeah\nYou know he ain't gonna die\nNo, no, no oh, you know he ain't gonna die\n(guitar solo)\n\nYeah they come to snuff the rooster\nYeah here come the rooster, yeah\nYou know he ain't gonna die, oh\nNo, no, no oh, you know he ain't gonna die\n\nWalkin' tall machine gun men\nThey spit on me in my home land\nGloria sent me pictures of my boy, Mmm\nGot my pills 'gainst mosquito death\nMy buddy's breathing his dyin' breath\nOh god please won't you help me make it through\n\nRepeat chorus",
            "artistImg": "https://i.ytimg.com/vi/vS_CzIw6fr4/hqdefault.jpg",
            "users_id": 3
          }, {
            "id": 7,
            "songName": "I Thought About Killing You",
            "artistName": "Kanye West",
            "songText": "I know, I know, I know, I know, know
            I know, I know, I know, I know, know
            I, I know it, I know it


            The most beautiful thoughts are always besides the darkest
            Today I seriously thought about killing you
            I contemplated, premeditated murder
            And I think about killing myself
            And I love myself way more than I love you, so…
            Today I thought about killing you, premeditated murder
            You'd only care enough to kill somebody you love
            The most beautiful thoughts are always inside the darkest
            (Mhm—mhm—mhm—mhm—mhmm)
            Just say it out loud to see how it feels
            People say, "Don't say this, don't say that."
            Just say it out loud, just to see how it feels
            Weigh all the options, nothing's off the table
            Today I thought about killing you, premeditated murder
            I think about killing myself
            And I, I love myself way more than I love you
            The most beautiful thoughts are always besides the darkest
            (Mhm—mhm—mhm—mhm—mhm—mhm—mhm—mhm—mhmm)
            I think this is the part where I'm supposed to say somethin' good To compensate it so it doesn't come off bad
            But sometimes I think really bad things
            Really, really, really bad things
            And I love myself way more than I love you
            See, if I was tryin' to relate it to more people
            I'd probably say I'm struggling with loving myself
            Because that seems like a common theme
            But that's not the case here
            I love myself way more than I love you
            And I think about killing myself
            So, best believe, I thought about killing you today
            Premeditated murder


            I called up my loved ones, I called up my cousins
            I called up the Muslims, said I'm 'bout to go dumb
            Get so bright, it's no sun, get so loud, I hear none
            Screamed so loud, got no lungs, hurt so bad, I go numb
            Time to bring in the drums, that prrt-pu-pu-pum
            Set the NewTone on 'em, set the nuke off on 'em
            I need Coke with no rum, I taste coke on her tongue
            I don't joke with no one, they'll say he died so young
            I done had a bad case of too many bad days
            Got too many bad traits, used the floor for ashtrays
            I don't do shit halfway, I'ma clear the cache
            I'ma make my name last, put that on my last name
            It's a different type of rules that we obey
            Ye, Ye, Ye season, nigga, we Old Bay
            We was all born to die, nigga DOA
            Niggas say they hero, mhm, I don't see no cape
            Mhm, I don't see no, mhm, yeah, I don't see no, mhm, mhm
            If I wasn't shinin' so hard, wouldn't be no shade
            Buckwheat-ass nigga, it's 'gon be otay
            Young nigga shit, nigga, we don't age
            I thought I was past my Deebo ways
            Even when I went broke, I ain't break
            How you gon' hate? Nigga, we go way back
            To when I had the braids and you had the wave cap
            Drop a pin for the fade and I'm on my way ASAP
            Don't get socked in the mouth, you know homie don't play that
            Pay the fire marshal bill 'cause this shit done got way packed
            They wanna see me go ape (ape, ape)
            All you gotta do is speak on Y
            All you gotta do is speak on Ye
            Don't get your tooth chipped like Frito-Lay",
            "artistImg_url" : "https://i.ytimg.com/vi/vS_CzIw6fr4/hqdefault.jpg",
            "users_id": 2,

          }
        ]
    );
    });
};
