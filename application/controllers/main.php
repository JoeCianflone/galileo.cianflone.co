<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		
		$this->output->cache(10);
	}
	
	public function index() {
		$this->load->view('main');
	}
}

