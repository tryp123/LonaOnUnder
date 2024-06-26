const audio = document.getElementById("myAudio");
const LevelCompl = document.getElementById("LevelCompl");
const SoundKnopka = document.getElementById("SoundKnopka");
const SoundCollect = document.getElementById("SoundCollect");
const ButtonClick = document.getElementById("ButtonClick");
const DeathEnemy = document.getElementById("DeathEnemy");
const Udar = document.getElementById("Udar");
let storedVolume = localStorage.getItem('musicVolume');
if (storedVolume === null) {
storedVolume = 50;}
audio.volume = storedVolume / 100;
function playAudio() {
audio.play();}
function StopAudio() {
audio.stop();}
document.addEventListener('keydown', function() {
playAudio();});
function playLevelCompleteSound() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    LevelCompl.volume = storedVolume / 100;}
LevelCompl.play();}
function playDeath() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    SoundDeath.volume = storedVolume / 100;}
SoundDeath.play();}
function playKnopka() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    SoundKnopka.volume = storedVolume / 100;}
SoundKnopka.play();}
function playCollect() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    SoundCollect.volume = storedVolume / 100;}
SoundCollect.play();}
function playButtonClick() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    ButtonClick.volume = storedVolume / 100;}
ButtonClick.play();}
function playDeathEnemy() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    DeathEnemy.volume = storedVolume / 100;}
DeathEnemy.play();}
function playUdar() {
const storedVolume = localStorage.getItem('soundEffectVolume');
if (storedVolume !== null) {
    Udar.volume = storedVolume / 100;}
Udar.play();}