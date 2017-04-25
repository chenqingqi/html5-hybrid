/**
 * 状态模式（不同状态下的相同操作）
 */



/**
 * 播放器
 */
function Player(video)
{
	
	
	/**
	 * 默认状态
	 */
	var _state = new StateStop();
	
	
	/**
	 * 切换状态
	 */
	function state(v)
	{
		_state = v;
	}
	
	
	/**
	 * 播放
	 */
	function play()
	{
		_state.play(this)
	}
	
	
	/**
	 * 暂停
	 */
	function pause()
	{
		_state.pause(this)
	}
	
	
	/**
	 * 停止
	 */
	function stop()
	{
		_state.stop(this)
	}
	
	
	return{
		
		video:video,
		state:state,
		play:play,
		pause:pause,
		stop:stop
	}
	
}



/**
 * 停止状态
 */
function StateStop()
{
	
	/**
	 * 播放
	 */
	function play(p)
	{
		
		console.log('切换到播放状态')
		p.state(new StatePlay());
		p.video.play();
	}
	
	
	/**
	 * 暂停
	 */
	function pause(p)
	{
		console.log('此操作被忽略,停止中不可暂停')
	}
	
	
	/**
	 * 停止
	 */
	function stop(p)
	{
		console.log('此操作被忽略,停止中不可再次停止')
	}
	
	
	return{
		
		play:play,
		pause:pause,
		stop:stop
	}
	
}


/**
 * 播放状态
 */
function StatePlay()
{
	
	/**
	 * 播放
	 */
	function play(p)
	{
		console.log('此操作被忽略,播放中不可再次播放')
	}
	
	
	/**
	 * 暂停
	 */
	function pause(p)
	{
		console.log('切换到暂停状态')
		p.state(new StatePause());
		p.video.pause();
	}
	
	
	/**
	 * 停止
	 */
	function stop(p)
	{
		console.log('切换到停止状态')
		p.state(new StateStop());
		//p.video.stop();
	}
	
	
	return{
		
		play:play,
		pause:pause,
		stop:stop
	}
	
}


/**
 * 暂停状态
 */
function StatePause()
{
	
	/**
	 * 播放
	 */
	function play(p)
	{
		console.log('切换到播放状态')
		p.state(new StatePlay());
		p.video.play();
	}
	
	
	/**
	 * 暂停
	 */
	function pause(p)
	{
		console.log('此操作被忽略,暂停中不可再次暂停')
	}
	
	
	/**
	 * 停止
	 */
	function stop(p)
	{
		console.log('切换到停止状态')
		p.state(new StateStop());
		//p.video.stop();
	}
	
	
	return{
		
		play:play,
		pause:pause,
		stop:stop
	}
	
}




/**
 * 测试播放状态机
 */

var player = new Player(document.getElementsByTagName('video')[0]);


window.addEventListener('click',function(e)
{
	
	if(e.target.id == 'play')
	{
		player.play()
	}
	
	
	if(e.target.id == 'pause')
	{
		player.pause()
	}
	
	
	if(e.target.id == 'stop')
	{
		player.stop()	
	}
	
})