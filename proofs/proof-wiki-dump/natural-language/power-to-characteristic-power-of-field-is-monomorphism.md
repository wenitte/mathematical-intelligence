# 

Source: https://proofwiki.org/wiki/Power_to_Characteristic_Power_of_Field_is_Monomorphism



Theorem
Let $F$ be a field whose characteristic is $p$ where $p \ne 0$.
Let $n \in \Z_{\ge 0}$ be any positive integer.
Let $\phi_n: F \to F$ be the mapping on $F$ defined as:

$\forall x \in F: \map {\phi_n} x = x^{p^n}$

Then $\phi_n$ is a (field) monomorphism.


Proof
Proof by induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\phi_n$ is a (field) monomorphism.
$\map P 0$ is trivially true:

$\map {\phi_0} x = x^{p^0} = x^1 = x$
and we see that $\phi_0$ is the identity automorphism.
This is not the zero homomorphism.
So from Ring Homomorphism from Field is Monomorphism or Zero Homomorphism, it follows that $\phi_0$ is a ring monomorphism.


Basis for the Induction
First we need to show that $\map P 1$ is true:

$\map {\phi_1} x = x^{p^1} = x^p$ is a (field) monomorphism.
This is demonstrated to be a monomorphism in Power to Characteristic of Field is Monomorphism.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map {\phi_k} x = x^{p^k}$ is a (field) monomorphism.

Then we need to show:

$\map {\phi_{k + 1} } x = x^{p^{k + 1} }$ is a (field) monomorphism.


Induction Step
This is our induction step:














\(\ds \map {\phi_{k + 1} } {a + b}\)

\(=\)







\(\ds \paren {a + b}^{p^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {a + b}^{p^k} }^p\)




















\(\ds \)

\(=\)







\(\ds \paren {a^{p^k} + b^{p^k} }^p\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a^{p^k} }^p + \paren {b^{p^k} }^p\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds a^{p^{k + 1} } + b^{p^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_{k + 1} } a + \map {\phi_{k + 1} } b\)










Multiplication is more straightforward:














\(\ds \map {\phi_{k + 1} } {a b}\)

\(=\)







\(\ds \paren {a b}^{p^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds a^{p^{k + 1} } b^{p^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_{k + 1} } a \map {\phi_{k + 1} } b\)









and does not rely on the induction process.

Thus, $\phi_{k + 1}$ is a homomorphism.

$\phi_{k + 1}$ is not the zero homomorphism, since $\map {\phi_{k + 1} } 1 = 1^{p^{k + 1} } = 1 \ne 0$.
So from Ring Homomorphism from Field is Monomorphism or Zero Homomorphism, it follows that $\phi_{k + 1}$ is a ring monomorphism.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \phi_n$ is a (field) monomorphism.
$\blacksquare$


Also see
Prime Power of Sum Modulo Prime, where the same technique is used.


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Theorem $3.3$ Corollary




