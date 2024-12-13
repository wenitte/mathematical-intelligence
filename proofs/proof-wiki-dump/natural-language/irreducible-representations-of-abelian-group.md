# 

Source: https://proofwiki.org/wiki/Irreducible_Representations_of_Abelian_Group



Theorem
Let $\struct {G, \cdot}$ be a finite abelian group.
Let $V$ be a non-null vector space over an algebraically closed field $K$.
Let $\rho: G \to \GL V$ be a linear representation.

Then $\rho$ is irreducible if and only if $\map {\dim_K} V = 1$, where, $\dim_K$ denotes dimension.


Proof
Sufficient Condition
Suppose that $\map {\dim_K} V = 1$.
That $\rho$ is irreducible is shown on Representation of Degree One is Irreducible.
$\Box$


Necessary Condition
Suppose that $\rho$ is an irreducible linear representation.
Let $g \in G$ be arbitrary. Now, for all $h \in G$, have:














\(\ds \map \rho g \map \rho h\)

\(=\)







\(\ds \map \rho {g h}\)





$\rho$ is a group homomorphism














\(\ds \)

\(=\)







\(\ds \map \rho {h g}\)





$G$ is an abelian group














\(\ds \)

\(=\)







\(\ds \map \rho h \map \rho g\)





$\rho$ is a group homomorphism




Now, combining Commutative Linear Transformation is G-Module Homomorphism and Corollary to Schur's Lemma (Representation Theory) yields that:

$\exists \lambda_g \in K: \map \rho g = \lambda_g \operatorname{Id}_V$
That is, there is a $\lambda_g \in K$ such that $\map \rho g$ is the linear mapping of multiplying by $\lambda_g$.
Hence, $\forall v \in V: \map {\map \rho g} v = \lambda_g v$.
It follows that any vector subspace of $V$ of dimension $1$ is invariant. 

So, had $V$ any proper vector subspace of dimension $1$, $\rho$ would not be irreducible.

Since $V$ is non-null, it follows from Trivial Vector Space iff Zero Dimension that $\map {\dim_K} V > 0$.
Hence necessarily $\map {\dim_K} V = 1$.
$\blacksquare$





