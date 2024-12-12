# 

Source: https://proofwiki.org/wiki/Exponent_Combination_Laws/Product_of_Powers



Theorem
Let $a \in \R_{> 0}$ be a positive real number.
Let $x, y \in \R$ be real numbers.
Let $a^x$ be defined as $a$ to the power of $x$.

Then:

$a^x a^y = a^{x + y}$


Proof 1













\(\ds a^{x + y}\)

\(=\)







\(\ds \map \exp {\paren {x + y} \ln a}\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \map \exp {x \ln a + y \ln a}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {x \ln a} \, \map \exp {y \ln a}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds a^x a^y\)





Definition of Power to Real Number



$\blacksquare$


Proof 2
Let $x, y \in \R$.

From Rational Sequence Decreasing to Real Number, there exist rational sequences $\sequence {x_n}$ and $\sequence {y_n}$ converging to $x$ and $y$, respectively.

Then, since Power Function on Strictly Positive Base is Continuous: Real Power:














\(\ds a^{x + y}\)

\(=\)







\(\ds a^{\ds \paren {\lim_{n \mathop \to \infty} x_n + \lim_{n \mathop \to \infty} y_n} }\)




















\(\ds \)

\(=\)







\(\ds a^{\ds \paren {\lim_{n \mathop \to \infty} \paren {x_n + y_n} } }\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} a^{x_n + y_n}\)





Sequential Continuity is Equivalent to Continuity in the Reals














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {a^{x_n} a^{y_n} }\)





Sum of Indices of Real Number: Rational Numbers














\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} a^{x_n} } \paren {\lim_{n \mathop \to \infty} a^{y_n} }\)





Product Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds a^x a^y\)





Sequential Continuity is Equivalent to Continuity in the Reals



$\blacksquare$


Also known as
The Exponent Combination Laws is also known as:

the Laws of Exponents
the Laws of Indices.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Laws of Exponents: $7.1$
1972: Murray R. Spiegel and R.W. Boxer: Theory and Problems of Statistics (SI ed.) ... (previous) ... (next): Chapter $1$: Scientific Notation
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): exponent (index)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): exponent (index)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): index (indices) (i)




