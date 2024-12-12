# 

Source: https://proofwiki.org/wiki/Gelfand_Representation_Theorem



Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a commutative Banach algebra over $\C$ such that:

the spectrum $\Phi_A$ of $A$ is non-empty.
Let $\hat a$ be the Gelfand transform of $a$.
Let $\struct {\map {\CC_0} {\Phi_A}, \norm {\, \cdot \,}_\infty}$ be the set of complex-valued functions vanishing at infinity with the supremum norm.
Define $G : A \to \map {\CC_0} {\Phi_A}$ by:

$\map G a = \hat a$
for each $a \in A$.
Let $\map {\sigma_A} a$ be the spectrum of $a$ in $A$.
Let $r_A$ be the spectral radius of $a$ in $A$.

Then $G$ is an algebra homomorphism with:

$(1) \quad \norm {\map G a}_\infty \le \norm a$ for each $a \in A$,
$(2) \quad \map {r_A} a = \norm {\hat a}_\infty$ for each $a \in A$,
$(3) \quad \map {\sigma_A} a = \hat a \sqbrk {\Phi_A}$ if $A$ is unital and $\map {\sigma_A} a = \hat a \sqbrk {\Phi_A} \cup \set 0$ otherwise.


Proof
Proof that $G$ is an algebra homomorphism
Let $a, b \in A$, $\lambda \in \C$ and $\phi \in \Phi_A$.
Then we have:














\(\ds \map {\paren {\map G {a + \lambda b} } } \phi\)

\(=\)







\(\ds \map {\widehat {a + \lambda b} } \phi\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a + \lambda b}\)




















\(\ds \)

\(=\)







\(\ds \map \phi a + \lambda \map \phi b\)





since $\phi$ is linear














\(\ds \)

\(=\)







\(\ds \map {\hat a} \phi + \lambda \map {\hat a} \phi\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\map G a} } \phi + \lambda \map {\paren {\map G b} } \phi\)









So we obtain:

$\map G {a + \lambda b} = \map G a + \lambda \map G b$
So $G$ is linear.
Now let $a, b \in A$. 
We have:














\(\ds \map {\paren {\map G {a b} } } \phi\)

\(=\)







\(\ds \map {\hat {a b} } \phi\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a b}\)




















\(\ds \)

\(=\)







\(\ds \map \phi a \map \phi b\)





Definition of Character (Banach Algebra)














\(\ds \)

\(=\)







\(\ds \map {\paren {\map G a} } \phi \map {\paren {\map G b} } \phi\)









So:

$\map G {a b} = \map G a \map G b$
so $G$ is an algebra homomorphism.
$\Box$


Proof of $(2)$
We have:














\(\ds \norm {\hat a}_\infty\)

\(=\)







\(\ds \sup \set {\cmod {\map {\hat a} \phi} : \phi \in \Phi_A}\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds \sup \set {\cmod {\map \phi a} : \phi \in \Phi_A}\)




















\(\ds \)

\(=\)







\(\ds \map {r_A} a\)





Spectral Radius of Element of Commutative Banach Algebra



$\Box$


Proof of $(1)$
We have:














\(\ds \norm {\map G a}_\infty\)

\(=\)







\(\ds \norm {\hat a}_\infty\)




















\(\ds \)

\(=\)







\(\ds \map {r_A} a\)




















\(\ds \)

\(\le\)







\(\ds \norm a\)





Spectrum of Element of Banach Algebra is Bounded: Corollary



$\Box$


Proof of $(3)$
This is precisely:

Spectrum of Element of Unital Commutative Banach Algebra in the case that $A$ is unital
Spectrum of Element of Unital Commutative Banach Algebra: Corollary $1$ otherwise.
$\blacksquare$



This needs considerable tedious hard slog to complete it.In particular: Reference the eponymTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




