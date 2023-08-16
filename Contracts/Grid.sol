// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./queue.sol";

contract DecayingToken is ERC20 {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIdCounter;
    
    mapping(uint256 => uint256) public MapIDvT;
    mapping(uint256 => uint256) public MapIDvC;

    uint256 public tokenId ;

    mapping(address=>uint256[]) public addmap;


    constructor() ERC20("Decaying Token", "DT") {}
    function checkB(address a) public view returns(uint256){
          return balanceOf(a);
    }
    

    function purchase(uint256 amount, address to) public {
        require(amount > 0, "Amount must be greater than 0");
        uint256 mintAmount = (amount * 10) / 100;

     tokenId = tokenIdCounter.current();
        tokenIdCounter.increment();
        
        _mint(to,mintAmount);

        MapIDvC[tokenId]=mintAmount;
        MapIDvT[tokenId] = block.timestamp;

        addmap[to].push(tokenId);
        
    }


 function getId () public  view  returns (uint256){
     return tokenId;
 }
       
    function burnExpired(address a)  public  {
       // return block.timestamp >= MapIDvT[Id] + 1 minutes;
    //    require(block.timestamp >= MapIDvT[Id] + 1 minutes);
            // uint256 x =MapIDvC[Id]; 
            //   _burn(a, x);
            //   
            uint x=addmap[a].length;
            for(uint i=0;i<x;i++)
            {
                uint tid=addmap[a][i];
                if(block.timestamp >= MapIDvT[tid] + 2 minutes)
                {
                    uint256 y=MapIDvC[tid]; 
                    delete MapIDvT[tid];
                    _burn(a,y);
                }
            }
    }

 }