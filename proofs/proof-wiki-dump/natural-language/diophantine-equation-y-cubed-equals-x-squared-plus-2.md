# 

Source: https://proofwiki.org/wiki/Diophantine_Equation_y_cubed_equals_x_squared_plus_2



Theorem
The indeterminate Diophantine equation:

$y^3 = x^2 + 2$
has only one solution in the Natural Numbers:

$x = 5, y = 3$


Proof
Assume that $x$ is even:














\(\ds \paren {2 k}^2 + 2\)

\(=\)







\(\ds 4 k^2 + 2\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {2 k^2 + 1}\)









Therefore, the right hand side is $2 \paren {2 k^2 + 1} \equiv 2 \pmod 4$
If $y$ is odd, then the left hand side will be odd:














\(\ds \paren {2 k + 1}^3\)

\(=\)







\(\ds 8 k^3 + 6 k^2 + 6 k + 1\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {4 k^3 + 3 k^2 + 3 k} + 1\)









and if $y$ is even, then the left hand side will be $\equiv 0 \pmod 4$














\(\ds \paren {2 k }^3\)

\(=\)







\(\ds 8 k^3\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {2 k^3}\)









Therefore, $x$ and $y$ must both be odd since the left hand side can never be $\equiv 2 \pmod 4$
Let us rewrite $x$ as $x = y + a$
We now demonstrate that $a$ must be even:














\(\ds x\)

\(=\)







\(\ds y + a\)














\(\ds \leadsto \ \ \)





\(\ds 2 r + 1\)

\(=\)







\(\ds \paren {2 s + 1 } + 2 k\)





$x$ and $y$ are both odd and $a$ is even














\(\ds \)

\(=\)







\(\ds \paren {2 \paren {s + k} + 1 }\)










Therefore:














\(\ds y^3\)

\(=\)







\(\ds \paren {y + a}^2 + 2\)





substituting $x = y + a$














\(\ds \)

\(=\)







\(\ds y^2 + 2 a y + a^2 + 2\)














\(\ds \leadsto \ \ \)





\(\ds y^3 - y^2\)

\(=\)







\(\ds 2 a y + a^2 + 2\)





subtracting $y^2$ from both sides








\(\ds \leadsto \ \ \)





\(\ds y^2 \paren {y - 1}\)

\(=\)







\(\ds 2 \paren {a y + \dfrac {a^2} 2 + 1}\)





factoring both sides














\(\ds \)

\(=\)







\(\ds 2 \paren {2 k y + 2 k^2 + 1}\)





$a$ is even: substituting $a = 2 k$














\(\ds \)

\(=\)







\(\ds 2 \paren {2 k \paren {y + k} + 1}\)









From the left hand side, we know that $y$ is odd and therefore $y - 1$ is even and the only even term on the right hand side is $2$.
Therefore, our only solution is: $y - 1 = 2 \leadsto y = 3$ and $x = 5$
$\blacksquare$


Historical Note
The Diophantine equation $y^3 = x^2 + 2$ was proved to have only the solution $x = 5, y = 3$ by Pierre de Fermat by use of the Method of Infinite Descent.
He submitted it, without proof, along with a number of others, to Pierre de Carcavi in a letter dated $14$ August $1659$.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{IV}$: The Prince of Amateurs




