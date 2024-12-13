# 

Source: https://proofwiki.org/wiki/Number_is_Sum_of_Five_Cubes



Theorem
Let $n \in \Z$ be an integer.

Then $n$ can be expressed as the sum of $5$ cubes (either positive or negative) in an infinite number of ways.


Proof
We have for any $m, n \in \Z$:














\(\ds \paren {6 m + n}^3\)

\(\equiv\)







\(\ds n^3\)

\(\ds \pmod 6\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds n\)

\(\ds \pmod 6\)



Euler's Theorem (Number Theory): $\phi$ of $6$ $= 2$



By definition of modulo arithmetic:

$\exists k \in \Z: \paren {6 m + n}^3 = n + 6 k$
We also have:














\(\ds \paren {k + 1}^3 + \paren {k - 1}^3 - k^3 - k^3\)

\(=\)







\(\ds \paren {k^3 + 3 k^2 + 3 k + 1} + \paren {k^3 - 3 k^2 + 3 k - 1} - k^3 - k^3\)





Cube of Sum














\(\ds \)

\(=\)







\(\ds 6 k\)









Thus $n = \paren {6 m + n}^3 + k^3 + k^3 - \paren {k + 1}^3 - \paren {k - 1}^3$ is an expression of $n$ as a sum of $5$ cubes.
In the equation above, $m$ is arbitrary and $k$ depends on both $m$ and $n$.
As there is an infinite number of choices for $m$, there is an infinite number of such expressions.
$\blacksquare$


Remark

This page has been identified as a candidate for refactoring of basic complexity.In particular: Find a way to incorporate this as a result without implementing it as a "remark"Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
From the result above we can also write each term of the sum explicitly:














\(\ds k\)

\(=\)







\(\ds \frac {\paren {6 m + n}^3 - n} 6\)




















\(\ds \)

\(=\)







\(\ds \frac {216 m^3 + 108 m^2 n + 54 m n^2 + n^3 - n} 6\)





Cube of Sum














\(\ds \)

\(=\)







\(\ds 36 m^3 + 18 m^2 n + 9 m n^2 + \frac {n^3 - n} 6\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds \paren {6 m + n}^3 + \paren {36 m^3 + 18 m^2 n + 9 m n^2 + \frac {n^3 - n} 6}^3 + \paren {36 m^3 + 18 m^2 n + 9 m n^2 + \frac {n^3 - n} 6}^3\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {36 m^3 + 18 m^2 n + 9 m n^2 + \frac {n^3 - n} 6 + 1}^3 - \paren {36 m^3 + 18 m^2 n + 9 m n^2 + \frac {n^3 - n} 6 - 1}^3\)









However, because of the complexity of this expression it is recommended to first calculate $k$.


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $227$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




