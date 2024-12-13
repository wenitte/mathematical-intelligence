# 

Source: https://proofwiki.org/wiki/Primitive_of_Tangent_of_a_x_over_x



Theorem
$\ds \int \frac {\tan a x} x \rd x = a x + \frac {\paren {a x}^3} 9 + \frac {2 \paren {a x}^5} {75} + \cdots + \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \paren {a x}^{2 n - 1} } {\paren {2 n - 1} \paren {2 n}!} + \cdots + C$
where $B_n$ denotes the $n$th Bernoulli number.


Proof













\(\ds \int \frac {\tan a x} x \rd x\)

\(=\)







\(\ds \int \frac 1 x \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \paren {a x}^{2 n - 1} } {\paren {2 n}!} \rd x\)





Power Series Expansion for Tangent Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} } {\paren {2 n}!} \int  x^{2 n - 2} \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} a^{2 n - 1} } {\paren {2 n}!} \paren {\frac {x^{2 n - 1} } {2 n - 1} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \paren {a x}^{2 n - 1} } {\paren {2 n - 1} \paren {2 n}!} + C\)









$\blacksquare$


Also see
Primitive of $\dfrac {\sin a x} x$
Primitive of $\dfrac {\cos a x} x$
Primitive of $\dfrac {\cot a x} x$
Primitive of $\dfrac {\sec a x} x$
Primitive of $\dfrac {\csc a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tan a x$: $14.436$




