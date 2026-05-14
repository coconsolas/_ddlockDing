
const params = new URLSearchParams(window.location.search);
const paramChar = params.get('char'); // shiv

const _character_info = {
  shiv: {
    name: 'SHIV',
    ascii_art: `
  ██████  ██░ ██  ██▓ ██▒   █▓
▒██    ▒ ▓██░ ██▒▓██▒▓██░   █▒
░ ▓██▄   ▒██▀▀██░▒██▒ ▓██  █▒░
  ▒   ██▒░▓█ ░██ ░██░  ▒██ █░░
▒██████▒▒░▓█▒░██▓░██░   ▒▀█░  
▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒░▓     ░ ▐░  
░ ░▒  ░ ░ ▒ ░▒░ ░ ▒ ░   ░ ░░  
░  ░  ░   ░  ░░ ░ ▒ ░     ░░  
      ░   ░  ░  ░ ░        ░  
                          ░      
    `,
    characterInfo: `
      <div>[STATUS: <span class="blink">ENRAGED</span>]</div>
      <div>[WEAPON: BUSTED FLUSH]</div>
      <br />
      <div>> 1. SERRATED KNIVES</div>
      <div>> 2. SLICE AND DICE</div>
      <div>> 3. BLOODLETTING</div>
      <div>> 4. KILLING BLOW</div>
      <br />
      <div>[ADDITIONAL INFO: Baxter Society, Drifter]</div>
      <div class="quotes"><b>TIME TO PULL OUT THE BIG GUNS</b></div>
    `,
    color: '255, 51, 51'
  },


  pocket: {
    name: 'POCKET',
    ascii_art: `
  @@@@@@@    @@@@@@    @@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@  
  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@  
  @@!  @@@  @@!  @@@  !@@       @@!  !@@  @@!         @@!    
  !@!  @!@  !@!  @!@  !@!       !@!  @!!  !@!         !@!    
  @!@@!@!   @!@  !@!  !@!       @!@@!@!   @!!!:!      @!!    
  !!@!!!    !@!  !!!  !!!       !!@!!!    !!!!!:      !!!    
  !!:       !!:  !!!  :!!       !!: :!!   !!:         !!:    
  :!:       :!:  !:!  :!:       :!:  !:!  :!:         :!:    
   ::       ::::: ::   ::: :::   ::  :::   :: ::::     ::    
   :         : :  :    :: :: :   :   :::  : :: ::      :     
    `,
    characterInfo: `
      <div>[STATUS: <span class="blink">POISON</span>]</div>
      <div>[WEAPON: THE BLACK SHEEP]</div>
      <br />
      <div>> 1. BARRAGE</div>
      <div>> 2. FLYING CLOAK</div>
      <div>> 3. ENCHANTER'S SATCHEL</div>
      <div>> 4. AFFLICTION</div>
      <br />
      <div>[ADDITIONAL INFO: FATHER, MINA]</div>
      <div class="quotes"><b>I'LL BLEED THEM OUT!</b></div>
    `,
    color: '0, 143, 5'
  },


  venator: {
    name: 'VENATOR',
    ascii_art: `
 __  _,  ____,  _,  _,   ____,  ____,  ____,   ____, 
(-\  /  (-|_,  (-|\ |   (-/_|  (-|    (-/  \  (-|__) 
  _\/    _|__,  _| \|,  _/  |,  _|,    _\__/,  _|  \,
 (      (      (       (       (      (       (        
    `,
    characterInfo: `
      <div>[STATUS: <span class="blink">CLERGY?</span>]</div>
      <div>[WEAPON: 51:20]</div>
      <br />
      <div>> 1. CONSECRATING GRENADE</div>
      <div>> 2. GUTSHOT</div>
      <div>> 3. HEX-LINED SNAP TRAP</div>
      <div>> 4. IRA DOMINI</div>
      <br />
      <div>[ADDITIONAL INFO: UNKNOWN]</div>
      <div class="quotes"><b>... EGO SUM IRA DOMINI ...</b></div>
    `,
    color: '138, 0, 224'
  },

  doorman: {
    name: 'DOORMAN',
    ascii_art: `
    //    ) ) //   ) ) //   ) ) //   ) )  /|    //| |     // | |     /|    / / 
   //    / / //   / / //   / / //___/ /  //|   // | |    //__| |    //|   / /  
  //    / / //   / / //   / / / ___ (   // |  //  | |   / ___  |   // |  / /   
 //    / / //   / / //   / / //   | |  //  | //   | |  //    | |  //  | / /    
//____/ / ((___/ / ((___/ / //    | | //   |//    | | //     | | //   |/ /     
    `,
    characterInfo: `
      <div>[STATUS: <span class="blink">GOD?</span>]</div>
      <div>[WEAPON: SERVICE WITH A SMILE]</div>
      <br />
      <div>> 1. CALL BELL</div>
      <div>> 2. DOORWAY</div>
      <div>> 3. LUGGAGE CART</div>
      <div>> 4. HOTEL GUEST</div>
      <br />
      <div>[ADDITIONAL INFO: UNKNOWN]</div>
      <div class="quotes"><b>CHECKING IN.</b></div>
    `,
    color: `212, 175, 55`
  }
};

const currentChar = _character_info[paramChar] || { name: '???', message: '누구세요?', color: '#ccc' };