# 

Source: https://proofwiki.org/wiki/Change_of_Base_of_Logarithm



Theorem
Let $\log_a x$ be the logarithm to base $a$ of $x$.
Then:

$\log_b x = \dfrac {\log_a x} {\log_a b}$
Thus a convenient formula for calculating the logarithm of a number to a different base.


Proof 1
Let:

$y = \log_b x \iff b^y = x$
$z = \log_a x \iff a^z = x$
Then:














\(\ds z\)

\(=\)







\(\ds \map {\log_a} {b^y}\)




















\(\ds \)

\(=\)







\(\ds y \log_a b\)





Logarithms of Powers














\(\ds \)

\(=\)







\(\ds \log_b x \log_a b\)









Hence the result.
$\blacksquare$


Proof 2
We begin with an equation that relates two exponentials with two different bases, $a$ and $b$, both positive and neither equal to one:

$b^y = a^z$
Without loss of generality, select and solve for $b$:

$b = a^{z/y}$
Take logarithm's base $a$ of both sides:














\(\ds \log_a b\)

\(=\)







\(\ds \map {\log_a} {a^{z/y} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac z y \, \log_a a\)





Logarithm of Power














\(\ds \log_a b\)

\(=\)







\(\ds \dfrac z y\)





using $\log_a a = 1$



Now define $x = b^y = a^z$, and note that:














\(\ds \quad b^y = x\)

\(\implies\)







\(\ds y = \log_b x\)





Definition of General Logarithm














\(\ds \quad a^z = x\)

\(\implies\)







\(\ds z = \log_a x\)





Definition of General Logarithm



Substituting these values of $y$ and $z$ into our expression, $\log_a b = z / y$, yields the desired version of the change-of-base formula:

$\log_a b = \dfrac {\log_a x} {\log_b x} \implies \log_b x = \dfrac {\log_a x} {\log_a b}$
$\blacksquare$


Also presented as
Some people prefer to write this as:

$\log_a x = \log_a b \log_b x$
as it is delightfully easy to remember.


Examples
Base $10$ to Base $e$
Form 1
$\ln x = \paren {\ln 10} \paren {\log_{10} x} = 2 \cdotp 30258 \, 50929 \, 94 \ldots \log_{10} x$


Form 2
$\ln x = \dfrac {\log_{10} x} {\log_{10} e} = \dfrac {\log_{10} x} {0 \cdotp 43429 \, 44819 \, 03 \ldots}$


Base $e$ to Base $10$
Form 1
$\log_{10} x = \paren {\log_{10} e} \paren {\ln x} = 0 \cdotp 43429 \, 44819 \, 03 \ldots \ln x$


Form 2
$\log_{10} x = \dfrac {\ln x} {\ln 10} = \dfrac {\ln x} {2 \cdotp 30258 \, 50929 \, 94 \ldots}$


Base $2$ to Base $10$
$\log_{10} x = \left({\lg x}\right) \left({\log_{10} 2}\right) = 0 \cdotp 30102 \, 99956 \, 63981 \, 19521 \, 37389 \ldots \lg x$


Base $10$ to Base $2$
$\lg x = \dfrac {\log_{10} x} {\log_{10} 2} = \dfrac {\log_{10} x} {0 \cdotp 30102 \, 99956 \, 63981 \, 19521 \, 37389 \ldots}$


Base $2$ to Base $8$
$\log_8 x = \dfrac {\lg x} 3$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): modulus (plural moduli)${}$: 2. (of logarithms)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): modulus (plural moduli)${}$: 2. (of logarithms)

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Change of Base of Logarithms: $7.13$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: $(14)$




