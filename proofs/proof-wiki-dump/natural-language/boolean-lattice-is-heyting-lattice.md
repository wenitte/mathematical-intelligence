# 

Source: https://proofwiki.org/wiki/Boolean_Lattice_is_Heyting_Lattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{B, \vee, \wedge, \neg, \preceq}$ be a Boolean lattice.

Then:

$\struct{B, \vee, \wedge, \preceq}$ is a Heyting lattice where:
$\forall x, y \in B : x \to y = \neg x \vee y$
and:
$x \to y$ denotes the relative pseudocomplement of $x$ with respect to $y$
Proof
By definition of Boolean lattice and Heyting lattice it remains to show that for all $x, y \in B$ the relative pseudocomplement of $x$ with respect to $y$ exists.

It will be shown that:

$\forall x, y \in B : \neg x \vee y$ is the relative pseudocomplement of $x$ with respect to $y$
By definition of relative pseudocomplement, it will be shown that:

$\forall x, y \in B : z \preceq \neg x \vee y$ if and only if $z \wedge x \preceq y$

Let:

$z \in B : z \preceq \neg x \vee y$.
We have:














\(\ds z \wedge x\)

\(\preceq\)







\(\ds \paren{\neg x \vee y} \wedge x\)





Meet Semilattice is Ordered Structure














\(\ds \)

\(=\)







\(\ds \paren{\neg x \wedge x} \vee \paren{y \wedge x}\)





Boolean lattice is disributive














\(\ds \)

\(=\)







\(\ds \bot \vee \paren{y \wedge x}\)





Definition of Complement














\(\ds \)

\(=\)







\(\ds \paren{y \wedge x}\)





Join Semilattice has Smallest Element iff has Identity














\(\ds \)

\(\preceq\)







\(\ds y\)





Definition of Meet




Let:

$z \in B : z \wedge x \preceq y$.
We have:














\(\ds z\)

\(=\)







\(\ds z \wedge \top\)





Meet Semilattice has Greatest Element iff has Identity














\(\ds \)

\(=\)







\(\ds z \wedge \paren{\neg x \vee x}\)





Definition of Complement














\(\ds \)

\(=\)







\(\ds \paren{z \wedge \neg x} \vee \paren{z \wedge x}\)





Boolean lattice is disributive














\(\ds \)

\(\preceq\)







\(\ds \neg x \vee y\)





Join Semilattice is Ordered Structure




The result follows.
$\blacksquare$





