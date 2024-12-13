# 

Source: https://proofwiki.org/wiki/Preimage_of_Union_Mapping_is_Union_of_Preimages


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $A$, $B$ and $Y$ be sets.

Let $f: A \to Y$ and $g: B \to Y$ be mappings that agree on $A \cap B$.
Let $f \cup g$ be the union of the mappings $f$ and $g$:

$\forall x \in A \cup B: \map {f \cup g} x = \begin {cases} \map f x & : x \in A \\ \map g x & : x \in B \end {cases}$

Let $S \subseteq Y$ be a subset of $Y$.

Then:

$\paren {f \cup g}^{-1} \sqbrk S = f^{-1} \sqbrk S \cup g^{-1} \sqbrk S$


Proof
From Union of Mappings which Agree is Mapping:

$f \cup g$ is well-defined

Let $x \in \paren {f \cup g}^{-1} \sqbrk S$
By Definition of Inverse Image:

$\paren {f \cup g}^{-1} \sqbrk S \subseteq A \cup B$

Let $x \in A$.
We have:

$\map f x = \map {\paren {f \cup g} } x \in S$
By Definition of Inverse Image:

$x \in f^{-1} \sqbrk S \subseteq f^{-1} \sqbrk S \cup g^{-1} \sqbrk S$

Let $x \in B$.
We have:

$\map g x = \map {\paren {f \cup g} } x \in S$
By Definition of Inverse Image:

$x \in g^{-1} \sqbrk S \subseteq f^{-1} \sqbrk S \cup g^{-1} \sqbrk S$

In both cases: 

$x \in f^{-1} \sqbrk U \cup g^{-1} \sqbrk S$
By Definition of Subset:

$\paren {f \cup g}^{-1} \sqbrk S \subseteq f^{-1} \sqbrk S \cup g^{-1} \sqbrk S$

Let $x \in f^{-1} \sqbrk S \cup g^{-1} \sqbrk S$.
Without loss of generality consider the case of $x \in f^{-1} \sqbrk S \subseteq A$.
Then:
$\map {\paren {f \cup g} } x = \map f x \in S$
Hence:

$x \in \paren {f \cup g}^{-1} \sqbrk S$
By Definition of Subset:

$f^{-1} \sqbrk S \cup g^{-1} \sqbrk S \subseteq \paren {f \cup g}^{-1} \sqbrk S$

By Definition of Set Equality:

$f^{-1} \sqbrk S \cup g^{-1} \sqbrk S = \paren {f \cup g}^{-1} \sqbrk S$
$\blacksquare$





