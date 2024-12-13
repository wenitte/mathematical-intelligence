# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Tangent_of_a_x



Theorem
$\ds \int x \tan a x \rd x = \frac 1 {a^2} \paren {\frac {\paren {a x} ^ 3} 3 + \frac {\paren {a x}^5} {15} + \frac {2 \paren {a x}^7} {105} + \cdots + \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!} + \cdots} + C$
where $B_{2 n}$ denotes the $2 n$th Bernoulli number.


Proof
From Power Series Expansion for Tangent Function:

The tangent function has a Taylor series expansion:














\(\ds \tan x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} 3 + \frac {2 x^5} {15} + \frac {17 x^7} {315} + \cdots\)










where $B_{2 n}$ denotes the Bernoulli numbers.
This converges for $\size x < \dfrac \pi 2$.















\(\ds x \tan ax\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} x^{2 n} } {\paren {2 n}!}\)














\(\ds \leadsto \ \ \)





\(\ds \int x \tan a x \rd x\)

\(=\)







\(\ds \int \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} x^{2 n} } {\paren {2 n}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int \frac {\paren{-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} x^{2 n} } {\paren {2 n}!} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} } {\paren {2 n}!} \times \int x^{2 n} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} } {\paren {2 n}!} \times \frac {x^{2 n + 1} } {2 n + 1} + C}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} x^{2 n + 1} } {\paren {2 n + 1}!} + C\)














\(\ds \leadsto \ \ \)





\(\ds \int x \tan a x \rd x\)

\(=\)







\(\ds \frac 1 {a ^ 2} \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!} + C\)









$\blacksquare$


Also see
Primitive of $x \sin a x$
Primitive of $x \cos a x$
Primitive of $x \cot a x$
Primitive of $x \sec a x$
Primitive of $x \csc a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tan a x$: $14.435$




