# 

Source: https://proofwiki.org/wiki/Five_Ramanujan-Nagell_Numbers

Theorem
There exist exactly $5$ Ramanujan-Nagell numbers: positive integers of the form $2^m - 1$ which are triangular:

$0, 1, 3, 15, 4095$
This sequence is A076046 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Consider the numbers of the form $2^m - 1$ which are triangular:














\(\ds 2^m - 1\)

\(=\)







\(\ds \frac {r \paren {r + 1} } 2\)





Closed Form for Triangular Numbers








\(\ds \leadstoandfrom \ \ \)





\(\ds 8 \paren {2^m - 1}\)

\(=\)







\(\ds 4 r \paren {r + 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 2^{m + 3} - 8\)

\(=\)







\(\ds 4 r^2 + 4 r\)










\(\text {(1)}: \quad\)



\(\ds \leadstoandfrom \ \ \)





\(\ds 2^{m + 3} - 7\)

\(=\)







\(\ds 4 r^2 + 4 r + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2 r + 1}^2\)









Let:

$n = m - 3$
$x = 2 r + 1$
and it can be seen that $(1)$ is equivalent to:

$x^2 + 7 = 2^n$
From Solutions of Ramanujan-Nagell Equation:

$x = 1, 3, 5, 11, 181$
Setting $r = \dfrac {x - 1} 2$ it is seen that the corresponding triangular numbers are:

$\dfrac {\paren {x - 1} \paren {x + 1} } 8$
Thus the corresponding Ramanujan-Nagell numbers are:

$0, 1, 3, 15, 4095$
$\blacksquare$





