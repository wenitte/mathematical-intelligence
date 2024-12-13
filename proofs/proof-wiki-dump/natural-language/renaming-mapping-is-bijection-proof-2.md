# 

Source: https://proofwiki.org/wiki/Renaming_Mapping_is_Bijection/Proof_2

Theorem
Let $f: S \to T$ be a mapping.
Let $r: S / \RR_f \to \Img f$ be the renaming mapping, defined as:

$r: S / \RR_f \to \Img f: \map r {\eqclass x {\RR_f} } = \map f x$
where:

$\RR_f$ is the equivalence induced by the mapping $f$
$S / \RR_f$ is the quotient set of $S$ determined by $\RR_f$
$\eqclass x {\RR_f}$ is the equivalence class of $x$ under $\RR_f$.

The renaming mapping is a bijection.


Proof
From Renaming Mapping is Well-Defined, $r: S / \RR_f \to \Img f$ is a well-defined mapping.
By definition, $\RR_f$ is the equivalence relation induced by the mapping $f$.
Hence by definition:

$\tuple {s_1, s_2} \in \RR_f \iff \map f {s_1} = \map f {s_2}$
From Condition for Mapping from Quotient Set to be Injection, this is precisely the condition required for $r$ to be an injection.
Next it is noted that the codomain of $r$ is $\Img f$.
Then from Restriction of Mapping to Image is Surjection, we have that $f_{\restriction \Img f}$ is a surjection.
Hence from Condition for Mapping from Quotient Set to be Surjection it follows that $r$ is also a surjection.
Thus $r$ is shown to be both an injection and a surjection, and so by definition is a bijection.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.6$




