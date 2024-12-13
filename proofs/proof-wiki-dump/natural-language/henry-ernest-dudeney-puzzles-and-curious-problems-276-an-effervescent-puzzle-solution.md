# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/276_-_An_Effervescent_Puzzle/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $276$
An Effervescent Puzzle
In how many ways can the letters in the word $\text {EFFERVESCES}$ be arranged in a line without two $\text E$s ever appearing together?
Of course, two occurrences of the same letter, such as $\text {F F}$, have no separate identity,
so that to interchange them will make no difference.
When the reader has done that, he should try the case where the letters have to be arranged differently in a circle, with no two $\text E$s together.
We are here, of course, only concerned with their positions on the circumference, and you must always read in a clockwise direction.


Solution
The answer to the first question is: $88 \, 200$ ways.
The answer to the second question is: $6300$ ways.


Proof
First we ignore the $\text E$'s and arrange the rest.
Consider the remaining letters as:

$\text F_1 \text F_2 \text {R V S}_1 \text {C S}_2$
There are $7!$ ways to arrange these letters.
Since the $\text F$'s and $\text S$'s are supposed to be indistingishable, we should divide the number of ways they can swap around to undo double-counting.
Therefore there are:

$\dfrac {7!}{2! 2!}$
ways to arrange these letters.
Now we insert the $\text E$'s inbetween these letters, or before and after these letters.
There are $8$ available spaces to put these $4$ $\text E$'s in.
There are, therefore:

$\dfrac {7!}{2! 2!} \times \dbinom 8 4 = 88 \, 200$
ways to arrange these letters in a line where no $\text E$'s are directly next to each other.
$\Box$

For the second question, we first arrange the letters, without $\text E$'s, on a single line.
As above, there are:

$\dfrac {7!}{2! 2!}$
ways to arrange these letters.
Now we insert the $\text E$'s inbetween these letters.
However, unlike when we did this on a line, the two ends, when wrapped in a circle, are actually the same space, so two $\text E$'s cannot occupy them at the same time.
Out the the $\dbinom 8 4$ possibilities, $\dbinom 6 2$ of them would be in this undesired arrangement.
(We cannot use $\dbinom 7 4$, i.e. consider the ends as the same space, as they are distinct spaces when we consider shifting.)
There are, therefore:

$\dfrac {7!}{2! 2!} \times \paren {\dbinom 8 4 - \dbinom 6 2} = 69 \, 300$
ways to arrange these letters in a line where no $\text E$'s are directly next to each other.
Now we wrap this line around in a circle.
In a circle, shifting all letters over by one space would not make a difference.
There are $11$ ways to shift the letters for each arrangement (including not shifting).
So, when wrapped around in a circle, there are:

$\dfrac {69 \, 300} {11} = 6300$
ways to arrange these letters where no $\text E$'s are directly next to each other.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $276$. -- An Effervescent Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $459$. An Effervescent Puzzle




