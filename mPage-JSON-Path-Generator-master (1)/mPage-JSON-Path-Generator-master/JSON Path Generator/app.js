
var contentsOfInputFile;

var onLoadHandler = function() { 
	contentsOfInputFile = this.result; 
	};

var someFunction = function() {
	var fr= new FileReader();
	fr.onload = onLoadHandler; // event handler. Response
	fr.readAsText(this.files[0]); // event trigger. Stimuli
};

document.getElementById("openfile").addEventListener('change', someFunction);




var generate = function() {
		var finalPath = " ";
		var countOfColon = 0 , characterOfInputFile , countOfClosingBraces = 0  , l;
		var searchText = "\"" + document.getElementById("SearchText").value + "\"";
		var searchTextlength = searchText.length;
		
				
		if(contentsOfInputFile.indexOf(searchText) != -1) 
		{
			var indexOfString = contentsOfInputFile.indexOf(searchText);
						
			for ( characterOfInputFile = (indexOfString - 1) ; characterOfInputFile >= 0 ; characterOfInputFile--)
			{
				
				if (contentsOfInputFile[characterOfInputFile] == "}" )
				{
			
					countOfClosingBraces = countOfClosingBraces + 1;
				}
			
				if (contentsOfInputFile[characterOfInputFile] == "{" )
				{
				
					if (countOfClosingBraces > 0 )
					{
						countOfClosingBraces = countOfClosingBraces - 1;
					}
					else
					{
						countOfColon = 0;
					}
				}
			
						
				if (contentsOfInputFile[characterOfInputFile] == ":" || contentsOfInputFile[characterOfInputFile] == "=")
				{
				
					countOfColon = countOfColon + 1;
					
					if(contentsOfInputFile[countOfColon == 1 && characterOfInputFile] == "=")
					{
						characterOfInputFile = characterOfInputFile - 2;
						finalPath = "." + finalPath;
					}
					
					if(contentsOfInputFile[countOfColon == 1 && characterOfInputFile] == ":")
					{
						characterOfInputFile = characterOfInputFile - 1;
						finalPath = "." + finalPath;
					}
					
					while ((countOfColon == 1 && characterOfInputFile > 0 ) && (contentsOfInputFile[characterOfInputFile] != "," && contentsOfInputFile[characterOfInputFile] != " " ))
					{							
						finalPath = contentsOfInputFile[characterOfInputFile] + finalPath;
						characterOfInputFile = characterOfInputFile - 1;
					}
					
								
				}
			}
			
		
		
			document.getElementById("result").innerHTML = finalPath.slice(0, -2);;
			
		}
		else 
		{
			
			document.getElementById("result").innerHTML =  searchText + " DOESN'T EXIST IN THE FILE ";
		}
				
		
		
};

var resetButton = function() {
	document.getElementById("result").innerHTML =  " YOUR PATH WILL BE DISPLAYED HERE ";
	document.getElementById("SearchText").value =  "";
};


document.getElementById("generatePath").addEventListener('click', generate);
document.getElementById("resetButton").addEventListener('click', resetButton);
