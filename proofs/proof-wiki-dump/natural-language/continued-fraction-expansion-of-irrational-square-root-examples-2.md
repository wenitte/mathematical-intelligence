# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/2

Examples of Continued Fraction Expansion of Irrational Square Root
The continued fraction expansion of the square root of $2$ is given by:

$\sqrt 2 = \sqbrk {1, \sequence 2}$
This sequence is A040000 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The sequence of convergents to the continued fraction expansion of the square root of $2$ begins:

$\dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \dfrac {1393} {985}, \dfrac {3363} {2378}, \ldots$


Proof













\(\ds \sqrt 2\)

\(=\)







\(\ds 1 + \paren {\sqrt 2 − 1}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac {\paren {\sqrt 2 − 1} \paren {\sqrt 2 + 1} } {\sqrt 2 + 1}\)





multiplying top and bottom by $\sqrt 2 + 1$














\(\ds \)

\(=\)







\(\ds 1 + \frac {\paren {\sqrt 2}^2 − 1^2} {\sqrt 2 + 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {1 + \sqrt 2}\)





as $\paren {\sqrt 2}^2 − 1^2 = 2 - 1 = 1$




Thus it is possible to replace $\sqrt 2$ recursively:














\(\ds \sqrt 2\)

\(=\)







\(\ds 1 + \frac 1 {1 + \sqrt 2}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {1 + \paren {1 + \cfrac 1 {1 + \sqrt 2} } }\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {2 + \cfrac 1 {1 + \sqrt 2} }\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {2 + \cfrac 1 {1 + \paren {1 + \cfrac 1 {1 + \sqrt 2} } } }\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {2 + \cfrac 1 {2 + \cfrac 1 {1 + \sqrt 2} } }\)










The pattern repeats indefinitely, producing the continued fraction expansion:

$\sqrt 2 = \sqbrk {1, 2, 2, 2, \ldots} = \sqbrk {1, \sequence 2}$

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$





