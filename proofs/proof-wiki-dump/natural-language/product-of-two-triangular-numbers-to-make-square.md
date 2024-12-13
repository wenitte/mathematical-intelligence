# 

Source: https://proofwiki.org/wiki/Product_of_Two_Triangular_Numbers_to_make_Square



Theorem
Let $T_n$ be a triangular number.
Then there is an infinite number of $m \in \Z_{>0}$ such that $T_n \times T_m$ is a square number.


Proof
Since $n^2 < n \paren {n + 1} < \paren {n + 1}^2$, $n \paren {n + 1}$ cannot be a square number.
Thus there are infinitely many distinct integer solutions to Pell's equation:

$x^2 - n \paren {n + 1} y^2 = 1$
and for each solution:














\(\ds T_n T_{x^2 - 1}\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2 \times \frac {x^2 \paren {x^2 - 1} } 2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2 \times \frac {x^2 n \paren {n + 1} y^2 } 2\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {x y n \paren {n + 1} } 2}^2\)









Hence the result.
$\blacksquare$


Examples
$T_2 \times T_{24}$
$T_2 \times T_{24} = 30^2$


$T_3 \times T_{48}$
$T_3 \times T_{48} = 84^2$


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $241$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $15$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $15$




