# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Cotangent_of_a_x



Theorem
$\ds \int x \cot a x \rd x = \frac 1 {a ^ 2} \paren {a x - \frac {\paren {a x}^3} 9 - \frac {\paren {a x}^5} {225} - \cdots + \frac {\paren {-1}^n 2^{2 n} B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1} !} + \cdots} + C$
where $B_{2 n}$ denotes the $2 n$th Bernoulli number.


Proof
From Power Series Expansion for Cotangent Function:

The (real) cotangent function has a Taylor series expansion:














\(\ds \cot x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x - \frac x 3 - \frac {x^3} {45} - \frac {2 x^5} {945} + \frac {x^7} {4725} - \cdots\)










where $B_{2 n}$ denotes the Bernoulli numbers.
This converges for $0 < \size x < \pi$.















\(\ds x \cot ax\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} a^{2 n - 1} x^{2 n} } {\paren {2 n}!}\)














\(\ds \leadsto \ \ \)





\(\ds \int x \cot a x \rd x\)

\(=\)







\(\ds \int \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} a^{2 n - 1} x^{2 n} } {\paren {2 n}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\int \frac {\paren {-1}^n 2^{2 n} B_{2 n} a^{2 n - 1} x^{2 n} } {\paren {2 n}!} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {-1}^n 2^{2 n} B_{2 n} a^{2 n - 1} } {\paren {2 n}!} \times \int x^{2 n} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {-1}^n 2^{2 n} B_{2 n} a^{2 n - 1} } {\paren {2 n}!} \times \frac {x^{2 n + 1} } {2 n + 1} + C}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} a^{2 n - 1} x^{2 n + 1} } {\paren {2 n + 1}!} + C\)














\(\ds \leadsto \ \ \)





\(\ds \int x \cot a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!} + C\)









$\blacksquare$


Also see
Primitive of $x \sin a x$
Primitive of $x \cos a x$
Primitive of $x \tan a x$
Primitive of $x \sec a x$
Primitive of $x \csc a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cot a x$: $14.446$




