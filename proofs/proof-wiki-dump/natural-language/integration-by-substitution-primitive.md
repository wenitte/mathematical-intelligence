# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Primitive



Theorem
Let $\phi$ be a real function which has a derivative on the closed interval $\closedint a b$.
Let $I$ be an open interval which contains the image of $\closedint a b$ under $\phi$.
Let $f$ be a real function which is continuous on $I$.

The primitive of $f$ can be evaluated by:

$\ds \int \map f x \rd x = \int \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u$
where $x = \map \phi u$.


Proof 1
Let $\map F x = \ds \int \map f x \rd x$.
Thus by definition $\map F x$ is a primitive of $\map f x$.















\(\ds \map {\frac \d {\d u} } {\map F x}\)

\(=\)







\(\ds \map {\frac \d {\d u} } {\map F {\map \phi u} }\)





Definition of $\map \phi u$














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \map F {\map \phi u} \dfrac \d {\d u} \map \phi u\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \map F x \dfrac \d {\d u} \map \phi u\)





Definition of $\map \phi u$














\(\ds \)

\(=\)







\(\ds \map f x \dfrac \d {\d u} \map \phi u\)





as $\map F x = \ds \int \map f x \rd x$




So $\map F x$ is an antiderivative of $\map f {\map \phi u} \dfrac \d {\d u} \map \phi u$.

Therefore:














\(\ds \int \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u\)

\(=\)







\(\ds \map F x\)




















\(\ds \)

\(=\)







\(\ds \int \map f x \rd x\)









where $x = \map \phi u$.
$\blacksquare$


Proof 2
We have been given that $x = \map \phi u$.
Hence:














\(\ds \int \map f x \rd x\)

\(=\)







\(\ds \int \map f x \dfrac {\d x} {\d u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map f {\map \phi u} \dfrac {\d u} {\d x} \dfrac {\d x} {\d u} \rd x\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map f {\map \phi u} \dfrac {\d x} {\d u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map f {\map \phi u} \dfrac \d {\d u} {\map \phi u} \rd u\)









$\blacksquare$


Also presented as
The rule of Integration by Substitution can also be seen in the form:

$\ds \int \map f x = \int \map \phi u \dfrac {\d x} {\d u} \rd u$
and:

$\ds \int \map F {\map \phi x} \rd x = \int \dfrac {\map F u} {\map {f'} x} \rd u$
where $x = \map \phi u$.


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
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: General Rules: $\text {V}$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): change of variable
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): change of variable

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Presumably one applies to the primitive and the other to the definite integral. The appropriate reference needs to be put on the appropriate page.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 4.5, \S 8.4$




