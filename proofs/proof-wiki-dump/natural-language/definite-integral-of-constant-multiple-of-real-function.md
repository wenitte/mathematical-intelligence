# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Constant_Multiple_of_Real_Function



Theorem
Let $f$ be a real function which is integrable on the closed interval $\closedint a b$.


There is believed to be a mistake here, possibly a typo.In particular: $f$ is only integrable here, but theorems used requiring that $f$ is continuous are used in both proofsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $c \in \R$ be a real number.

Then:

$\ds \int_a^b c \map f x \rd x = c \int_a^b \map f x \rd x$


Proof 1
Let $F$ be a primitive of $f$ on $\closedint a b$.
By Primitive of Constant Multiple of Function, $H = c F$ is a primitive of $c f$ on $\closedint a b$.
Hence by the Fundamental Theorem of Calculus:














\(\ds \int_a^b c \map f x \rd x\)

\(=\)







\(\ds \bigintlimits {c \map F x} a b\)




















\(\ds \)

\(=\)







\(\ds c \bigintlimits {\map F x} a b\)




















\(\ds \)

\(=\)







\(\ds c \int_a^b \map f x \rd x\)









$\blacksquare$


Proof 2
Let $F$ be a primitive of $f$ on $\closedint a b$.
By Linear Combination of Definite Integrals:

$\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t = \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t$
for real functions $f$ and $g$ which are integrable on the closed interval $\closedint a b$, where $\lambda$ and $\mu$ be real numbers.
The result follows by setting $\lambda = c$ and $\mu = 0$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: General Formulas involving Definite Integrals: $15.8$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Rules and Techniques of Integration: $1.2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): definite integral
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): definite integral




