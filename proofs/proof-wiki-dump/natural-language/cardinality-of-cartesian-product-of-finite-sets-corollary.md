# 

Source: https://proofwiki.org/wiki/Cardinality_of_Cartesian_Product_of_Finite_Sets/Corollary



Corollary to Cardinality of Cartesian Product of Finite Sets
Let $S \times T$ be the cartesian product of two sets $S$ and $T$ which are both finite.

Then:

$\card {S \times T} = \card {T \times S}$
where $\card {S \times T}$ denotes the cardinality of $S \times T$.


Proof 1













\(\ds \card {S \times T}\)

\(=\)







\(\ds \card S \times \card T\)





Cardinality of Cartesian Product of Finite Sets














\(\ds \)

\(=\)







\(\ds \card T \times \card S\)





Integer Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \card {T \times S}\)





Cardinality of Cartesian Product of Finite Sets



$\blacksquare$


Proof 2
Let $f: S \times T \to T \times S$ be the mapping defined as:

$\forall \tuple {s, t} \in S \times T: \map f {s, t} = \tuple {t, s}$
which is shown to be bijective as follows:















\(\ds \map f {s_1, t_1}\)

\(=\)







\(\ds \map f {s_2, t_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {t_1, s_1}\)

\(=\)







\(\ds \tuple {t_2, s_2}\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \tuple {s_1, t_1}\)

\(=\)







\(\ds \tuple {s_2, t_2}\)





Equality of Ordered Pairs



showing $f$ is an injection.

Let $\tuple {t, s} \in T \times S$.
Then:

$\exists \tuple {s, t} \in S \times T: \map f {s, t} = \tuple {t, s}$
showing that $f$ is a surjection.

So we have demonstrated that there exists a bijection from $S \times T$ to $T \times S$.
The result follows by definition of set equivalence.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $9 \ \text {(i)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 5$: Cartesian Products: Exercise $1$




