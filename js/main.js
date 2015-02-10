function openModalPipemaster () {
	$( ".modal-title" ).remove();
	$( ".modal-header" ).append( $( "<h4 class='modal-title' id='myModalLabel'>Pipemaster</h4>" ) );
	$( ".different-body" ).remove();
	$( ".modal-body" ).append( $( " <div class='different-body'><p><strong>Course:</strong> Advanced Programing</p><p><strong>School:</strong> University of Jyvaskyla</p><p><strong>Grade:</strong> 5/5</p><p><strong>Description:</strong> Understanding of the basics from Object oriented programming and Test Driven Development (TDD). Ability to do small OO-programs. Can design and implement a GUI.</p><p><strong>Our project:</strong> During that time when I participated the course I worked in warehouse and decided to create something related to that. First idea was to create software that stores items used in prefabrication and then make calculations automatically when you give it information about the pipe that you are creating at that time. This was my first real programing project. I did not know any programing before university. Course was held first time with graphical user interface technology and our lecturer was not familiar enough whith technology. We had to learn most of the project related stuff by our own. All projects did not achived goal that we had planned to deliver. I did learn lot from the project. How you can search help online for programing problems? This was also project which started my passion for interfaces. I thought there has to be better ways to make easier and better looking GUIs for software. Under you can download software from dropbox but is not really functionin. Biggest thing that it shows is where my interface design passion started.</p><p><strong>Technologies:</strong> Java, SVN, Eclipse, WindowBuilder </p><p><strong>My responsibilities:</strong> Individual project</p></div>" ) );
	$(".modal-footer").empty();
	$(".modal-footer").append($("<a type='button' class='btn btn-primary' href='https://www.dropbox.com/s/osc9zmovhcogfzi/Pipemaster.jar' target='_blank'>Download<i class='margin-left fa fa-dropbox'></i></a>"));
	$('#myModal').modal('show');
}

function openModalSprayCan () {
	$(".modal-title").remove();
	$(".modal-header").append( $( "<h4 class='modal-title' id='myModalLabel'>Digital Spray Can</h4>" ) );
	$(".different-body").remove();
	$(".modal-body").append( $( " <div class='different-body'><p><strong>Course:</strong> Interface Technologies</p><p><strong>School:</strong> University of Helsinki</p><p><strong>Grade:</strong> 3/5</p><p><strong>Description:</strong> The course presents techniques, tools and working of recent important interface technologies. The focus is on learning how to develop for new input or interaction techniques, or devices. Example areas include but are not limited to: pen-based tactile and haptic UIs, 3-D interaction, touch and multi-touch, tabletop and large display interaction. The course will have several large displays, sensors, input technologies, different smartphones (Android, Nokia, IOS) as resources.</p><p><strong>Our project:</strong> When we started plan our project we did not have any knoweledge of mobile development. We decided to give it try and started develope new invative prototype of the product called digital spray can. Our aims were vare high when we started to work. We planned the product where you can digital draw on walls and those drawing are available for other to watch when they got on spot where drawing was made. We found few problems while we developed the product. Drawing mode was quite hard to make but we managed to make something out of it. Other problem was free version of google maps at that time. It was not really stable. After all it was nice to learn how you can use different technologies to create new products. In our case software will need lots of future development. Under you can find links to GitHub and Youtube for code and example video. Atleast we cuold create nice video to demonstrate the idea.</p><p><strong>Technologies:</strong>Java, PhoneGap, Android </p><p><strong>My responsibilities:</strong> Map view mode, creating video and presentation</p></div>" ) );
	$(".modal-footer").empty();
	$(".modal-footer").append($("<a type='button' class='btn btn-primary' href='https://github.com/interface-technologies/project' target='_blank'>GitHub<i class='margin-left fa fa-github'></i></a> <a type='button' class='btn btn-danger' href='https://www.youtube.com/watch?v=BcWjQ43XYPg' target='_blank'>Youtube<i class='margin-left fa fa-youtube'></i></a>"));
	$('#myModal').modal('show');
}

function openModalMakefile () {
	$( ".modal-title" ).remove();
	$( ".modal-header" ).append( $( "<h4 class='modal-title' id='myModalLabel'>Makefile Generator</h4>" ) );
	$( ".different-body" ).remove();
	$( ".modal-body" ).append( $( " <div class='different-body'><p><strong>Course:</strong> Advanced Software Engineering</p><p><strong>School:</strong> Universitat Politecnica de Catalunya</p><p><strong>Grade:</strong> 8.8/10</p><p><strong>Description:</strong> As systems and services become more pervasive, large-scale and complex, new methods are needed to deal with the complexity of conceiving them, designing them and implementing them. ASE will expose students to software engineering methods that provide them the ability to develop software systems and services in a more efficient and effective way. The presented methods will embrace the full range of software engineering activities, from requirements engineering to software validation, from formal models to practical artifacts, from products to processes. The program of the course will evolve continuously as new methods emerge and others become obsolete.</p><p><strong>Our project:</strong> Project was ment to be focused on research in software engineering. Our orginal plan was try to get developers use more MDD methdologies. We created new prototype of the tool that is ment to be used by developers who work on C projects. Our tool is trying to ask developers first created design of the system and from that design our tool will create makefile and other needed files for the project. Project is only prototype and we did not really come to solution is this really needed but we learn alot about web-technologies and research in software engineering. Under you can find link to our GitHub where our code is hosted.</p><p><strong>Technologies:</strong> Javascript, Html5, CSS, Bootstrap, Jquery, Kinetic.js, Angular.js</p><p><strong>My responsibilities:</strong> Interface design, interface implementation, research and writing the report.</p></div>" ) );
	$(".modal-footer").empty();
	$(".modal-footer").append($("<a type='button' class='btn btn-primary' href='https://github.com/tcoatale/Makefile-Generator' target='_blank'>GitHub<i class='margin-left fa fa-github'></i></a>"));
	$('#myModal').modal('show');
}

function openModalCogfut () {
	$( ".modal-title" ).remove();
	$( ".modal-header" ).append( $( "<h4 class='modal-title' id='myModalLabel'>CogFut</h4>" ) );
	$( ".different-body" ).remove();
	$( ".modal-body" ).append( $( " <div class='different-body'><p><strong>Course:</strong> Software Engineering Lab</p><p><strong>School:</strong> University of Helsinki</p><p><strong>Grade:</strong> 5/5</p><p><strong>Description:</strong> Idea of the course is the make students familiar with agile methdologies. Teaching student how real software projects are done and organized. Give student taste what is it to work with real customer and actually make some value to customer.</p><p><strong>Our project:</strong> Project that I participatet was order one researcher of our university who is working on field of psychology. Idea was create first prototype of the soccer game. Goal of the game is teache different tactics for young players and in that way to improve their evolution to great soccer players. You can find working project from the link above. That version is second step of the project but most of it interface design and basic functionality is created in our project. Project is moved now to next development step and publicly available code from GitHub is removed. There is menu bar at the top of the page where you can play the game. I just do not understand why next development group has hide it to mouse over effect because you do not know that it exist unless you are lucky.</p><p><strong>Technologies:</strong> Javascript, Html5, CSS, Java, Bootstrap, Jquery, Kinetic.js, require.js, maven, jasmine, spring, ant</p><p><strong>My responsibilities:</strong> Interface design, interface implementation, project management and working with customer.</p></div>" ) );
	$(".modal-footer").empty();
	$(".modal-footer").append($("<a type='button' class='btn btn-primary' href='http://cogfut.herokuapp.com' target='_blank'>Try it out</a>"));
	$('#myModal').modal('show');
}


function openModalFuzu () {
	$( ".modal-title" ).remove();
	$( ".modal-header" ).append( $( "<h4 class='modal-title' id='myModalLabel'>Fuzu Subscription Page </h4>" ) );
	$( ".different-body" ).remove();
	$( ".modal-body" ).append( $( " <div class='different-body'><p><strong>Practice work for job application</strong></p><p><strong>Company:</strong><a href='http://fuzu.fi/' target='_blank'> Fuzu</a></p><p><strong>Description:</strong> I was asked to create web page using framework that I can choose. I was also asked to add some features to buttons and forms. Picture above is the picture that was given to me. You can find result from the link and code from the GitHub.</p><p><strong>Technologies:</strong> HTML5, CSS, Bootstrap, Jquery</p> <img src='images/fuzu.png' class='img-responsive project img-rounded'></div>" ) );
	$(".modal-footer").empty();
	$(".modal-footer").append($("<a type='button' class='btn btn-primary' href='https://github.com/miilkivi/Fuzu_project' target='_blank'>GitHub<i class='margin-left fa fa-github'></i></a>"));
	$('#myModal').modal('show');
}
















