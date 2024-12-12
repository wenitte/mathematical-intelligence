# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Inverse_Image_Mapping_of_Mapping



Theorem
The following definitions of the concept of Inverse Image Mapping of Mapping are equivalent:

Definition 1
The inverse image mapping of $f$ is the mapping $f^\gets: \powerset T \to \powerset S$ that sends a subset $Y \subseteq T$ to its preimage $f^{-1} \sqbrk T$ under $f$:

$\forall Y \in \powerset T: \map {f^\gets} Y = \begin {cases} \set {s \in S: \exists t \in Y: \map f s = t} & : \Img f \cap Y \ne \O \\ \O & : \Img f \cap Y = \O \end {cases}$
Definition 2
The inverse image mapping of $f$ is the direct image mapping of the inverse $f^{-1}$ of $f$:

$f^\gets = \paren {f^{-1} }^\to: \powerset T \to \powerset S$:
That is:

$\forall Y \in \powerset T: \map {f^\gets} Y = \set {s \in S: \exists t \in Y: \map f s = t}$


Proof
Consider the mapping defined as:

$\forall Y \in \powerset T: \map {f^\gets} Y = \set {s \in S: \exists t \in Y: \map f s = t}$
Let $\Img f \cap Y = \O$.
Then:

$\forall t \in T: \neg \exists t \in \Img f \cap Y$
and so:

$\set {s \in S: \exists t \in Y: \map f s = t} = \O$
and so:

$\forall Y \in \powerset T: \map {f^\gets} Y = \begin {cases} \set {s \in S: \exists t \in Y: \map f s = t} & : \Img f \cap Y \ne \O \\ \O & : \Img f \cap Y = \O \end {cases}$
$\blacksquare$





