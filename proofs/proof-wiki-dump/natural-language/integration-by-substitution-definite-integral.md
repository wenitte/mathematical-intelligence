# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Definite_Integral



Theorem
Let $\phi$ be a real function which has a derivative on the closed interval $\closedint a b$.
Let $I$ be an open interval which contains the image of $\closedint a b$ under $\phi$.
Let $f$ be a real function which is continuous on $I$.

If $\map \phi a \le \map \phi b$, then the definite integral of $f$ from $a$ to $b$ can be evaluated by:

$\ds \int_{\map \phi a}^{\map \phi b} \map f t \rd t = \int_a^b \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u$
where $t = \map \phi u$.
If $\map \phi a > \map \phi b$, then the definite integral of $f$ from $a$ to $b$ can be evaluated by:

$\ds - \int_{\map \phi b}^{\map \phi a} \map f t \rd t = \int_a^b \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u$

The technique of solving an integral in this manner is called integration by substitution.


Corollary
Let $f : \R \to \R$ be a real function.
Let $f$ be integrable.
Let $a$, $b$, and $c$ be real numbers.

Then:

$\ds \int_{a - c}^{b - c} \map f t \rd t = \int_a^b \map f {t - c} \rd t$


Proof
Let $F$ be an antiderivative of $f$.
We have:














\(\ds \map {\frac \d {\d u} } {\map F t}\)

\(=\)







\(\ds \map {\frac \d {\d u} } {\map F {\map \phi u} }\)





Definition of $\map \phi u$














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d t} \map F {\map \phi u} \dfrac \d {\d u} \map \phi u\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map f {\map \phi u} \dfrac \d {\d u} \map \phi u\)





as $\map F t = \ds \int \map f t \rd t$



Hence $\map F {\map \phi u}$ is an antiderivative of $\map f {\map \phi u} \dfrac \d {\d u} \map \phi u$.

Thus:














\(\ds \int_a^b \map f {\map \phi u} \map {\phi'} u \rd u\)

\(=\)







\(\ds \bigintlimits {\map F {\map \phi u} } a b\)





Fundamental Theorem of Calculus: Second Part




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \map F {\map \phi b} - \map F {\map \phi a}\)










If $\map \phi a \le \map \phi b$, we also have:














\(\ds \int_{\map \phi a}^{\map \phi b} \map f t \rd t\)

\(=\)







\(\ds \bigintlimits {\map F t} {\map \phi a} {\map \phi b}\)




















\(\ds \)

\(=\)







\(\ds \map F {\map \phi b} - \map F {\map \phi a}\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map f {\map \phi u} \map {\phi'} u \rd u\)





from $(1)$



which was to be proved. 
If instead $\map \phi a > \map \phi b$, we have:














\(\ds - \int_{\map \phi b}^{\map \phi a} \map f t \rd t\)

\(=\)







\(\ds - \bigintlimits {\map F t} {\map \phi b} {\map \phi a}\)




















\(\ds \)

\(=\)







\(\ds \map F {\map \phi b} - \map F {\map \phi a}\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map f {\map \phi u} \map {\phi'} u \rd u\)





from $(1)$



which was to be proved.
$\blacksquare$


Also known as
Because the most usual substitution variable used is $u$, this method is often referred to Integration by Substitution as $u$-substitution in the source works for introductory-level calculus courses.
Some sources refer to this technique as Change of Variable, but that has a number of different meanings depending upon context.


Proof Technique
The usefulness of the technique of Integration by Substitution stems from the fact that it may be possible to choose $\phi$ such that $\map f {\map \phi u} \dfrac \d {\d u} \map \phi u$ (despite its seeming complexity in this context) may be easier to integrate.
If $\phi$ is a trigonometric function, the use of trigonometric identities to simplify the integrand is called integration by trigonometric substitution (or simply trig substitution).
Care must be taken to address the domain and image of $\phi$.
This consideration frequently arises when inverse trigonometric functions are involved.


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 8$. Change of Variable
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Rules and Techniques of Integration: $2.2$ Integration by substitution
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.22$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): change of variable
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): change of variable

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Presumably one applies to the primitive and the other to the definite integral. The appropriate reference needs to be put on the appropriate page.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 4.5, \S 8.4$




