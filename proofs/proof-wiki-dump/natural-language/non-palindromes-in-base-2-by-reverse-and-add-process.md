# 

Source: https://proofwiki.org/wiki/Non-Palindromes_in_Base_2_by_Reverse-and-Add_Process



Theorem
Let the number $22$ be expressed in binary: $10110_2$.
When the reverse-and-add process is performed on it repeatedly, it never becomes a palindromic number.


Proof













\(\ds 10110_2 + 01101_2\)

\(=\)







\(\ds 100011_2\)














\(\ds \leadsto \ \ \)





\(\ds 100011_2 + 110001_2\)

\(=\)







\(\ds 1010100_2\)









It remains to be shown that a binary number of this form does not become a palindromic number.

Let $d_n$ denote $n$ repetitions of a binary digit $d$ in a number.
Thus:

$10111010000$
can be expressed as:

$101_3010_4$
Beware that the subscript, from here on in, does not denote the number base.

It is to be shown that the reverse-and-add process applied to:

$101_n010_{n + 1}$
leads after $4$ iterations to:

$101_{n + 1}010_{n + 2}$
Thus:














\(\ds 101_n010_{n + 1} + 0_{n + 1}101_k01\)

\(=\)







\(\ds 110_n101_{n - 1}01\)














\(\ds \leadsto \ \ \)





\(\ds 110_n101_{n - 1}01 + 101_{n - 1}010_n11\)

\(=\)







\(\ds 101_{n + 1}010_{n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds 101_{n + 1}010_{n + 1} + 0_{n + 1}101_{n + 1}01\)

\(=\)







\(\ds 110_{n - 1}10001_{n - 1}01\)














\(\ds \leadsto \ \ \)





\(\ds 110_{n - 1}10001_{n - 1}01 + 101_{n - 1}00010_{n - 1}11\)

\(=\)







\(\ds 101_{n + 1}010_{n + 2}\)










As neither $101_n010_{n + 1}$ nor $101_{n + 1}010_{n + 2}$ are palindromic numbers, nor are any of the intermediate results, the result follows.
$\blacksquare$


Historical Note
This result, according to David Wells in his $1986$ book Curious and Interesting Numbers, was given by Roland Sprague, but the source for this has not been identified.
Independently of Sprague's work, Glyn Johns and James Wiegold, in the context of a children's mathematics club in Cardiff, Wales, noted the reverse-and-add behaviour of $1010100_2$.
Their subsequent report in Volume $78$, issue $483$ of The Mathematical Gazette was used as the basis of the analysis given here in $\mathsf{Pr} \infty \mathsf{fWiki}$, but it needs to be pointed out that there are a number of mistakes in that source.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $196$
Nov. 1994: Glyn Johns and James Wiegold: The Palindrome Problem in Base 2 (The Mathematical Gazette Vol. 78, no. 483: pp. 312 – 314)  www.jstor.org/stable/3620206
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $196$




