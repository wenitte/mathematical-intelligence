# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Boolean_Algebras)

This proof is about De Morgan's Laws in the context of Boolean Algebra. For other uses, see De Morgan's Laws.



Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra.

Then for all $a, b \in S$:

$\neg \paren {a \vee b} = \neg a \wedge \neg b$
$\neg \paren {a \wedge b} = \neg a \vee \neg b$


Proof
By virtue of Complement in Boolean Algebra is Unique, it will suffice to verify:

$\paren {a \vee b} \wedge \paren {\neg a \wedge \neg b} = \bot$
$\paren {a \vee b} \vee \paren {\neg a \wedge \neg b} = \top$
For the first of these, compute:














\(\ds \paren {a \vee b} \wedge \paren {\neg a \wedge \neg b}\)

\(=\)







\(\ds \paren {\paren {a \vee b} \wedge \neg a} \wedge \neg b\)





$\wedge$ is associative














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \wedge \neg a} \vee \paren {b \wedge \neg a} } \wedge \neg b\)





$\wedge$ distributes over $\vee$














\(\ds \)

\(=\)







\(\ds \paren {\bot \vee \paren {b \wedge \neg a} } \wedge \neg b\)





Axiom $(\text {BA} \ 4)$ for Boolean algebras














\(\ds \)

\(=\)







\(\ds \paren {b \wedge \neg a} \wedge \neg b\)





$\bot$ is the identity for $\vee$














\(\ds \)

\(=\)







\(\ds \neg a \wedge \paren {b \wedge \neg b}\)





$\wedge$ is commutative and associative














\(\ds \)

\(=\)







\(\ds \neg a \wedge \bot\)





Axiom $(\text {BA} \ 4)$














\(\ds \)

\(=\)







\(\ds \bot\)





Identities of Boolean Algebra are also Zeroes




By the Duality Principle, we also conclude:

$\paren {a \wedge b} \vee \paren {\neg a \vee \neg b} = \top$
Substituting $\neg a$ and $\neg b$ for $a$ and $b$, respectively, this becomes:

$\paren {\neg a \wedge \neg b} \vee \paren {a \vee b} = \top$
where Complement of Complement (Boolean Algebras) was applied.
Since $\vee$ is commutative, we have also derived the second of the two equations above.

Hence:

$\neg \paren {a \vee b} = \neg a \wedge \neg b$
$\Box$

Now by again the Duality Principle:

$\neg \paren {a \wedge b} = \neg a \vee \neg b$
follows immediately.
$\blacksquare$


Also see
De Morgan's Laws (Logic)
De Morgan's Laws (Predicate Logic)
De Morgan's Laws (Set Theory)


Source of Name
This entry was named for Augustus De Morgan.


Historical Note
Augustus De Morgan proposed what are now known as De Morgan's laws in $1847$, in the context of logic.
They were subsequently applied to the union and intersection of sets, and in the context of set theory the name De Morgan's laws has been carried over.


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$: Exercise $2$




