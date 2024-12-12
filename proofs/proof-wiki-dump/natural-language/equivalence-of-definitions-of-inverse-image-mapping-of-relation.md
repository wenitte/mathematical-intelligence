# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Inverse_Image_Mapping_of_Relation



Theorem
The following definitions of the concept of Inverse Image Mapping of Relation are equivalent:

Definition 1
The inverse image mapping of $\RR$ is the mapping $\RR^\gets: \powerset T \to \powerset S$ that sends a subset $Y \subseteq T$ to its preimage $\map {\RR^{-1} } Y$ under $\RR$:

$\forall Y \in \powerset T: \map {\RR^\gets} Y = \begin {cases} \set {s \in S: \exists t \in Y: \tuple {t, s} \in \RR^{-1} } & : \Img \RR \cap Y \ne \O \\ \O & : \Img \RR \cap Y = \O \end {cases}$
Definition 2
The inverse image mapping of $\RR$ is the direct image mapping of the inverse $\RR^{-1}$ of $\RR$:

$\RR^\gets = \paren {\RR^{-1} }^\to: \powerset T \to \powerset S$
That is:

$\forall Y \in \powerset T: \map {\RR^\gets} Y = \set {s \in S: \exists t \in Y: \tuple {t, s} \in \RR^{-1} }$


Proof
Consider the mapping defined as:

$\forall Y \in \powerset T: \map {\RR^\gets} Y = \set {s \in S: \exists t \in Y: \tuple {t, s} \in \RR^{-1} }$
Let $\Img \RR \cap Y = \O$.
Then:

$\forall t \in T: \neg \exists t \in \Img \RR \cap Y$
and so:

$\set {s \in S: \exists t \in Y: \tuple {s, t} \in \RR} = \O$
and so:

$\forall Y \in \powerset T: \map {\RR^\gets} Y = \begin {cases} \set {s \in S: \exists t \in Y: \tuple {t, s} \in \RR^{-1} } & : \Img f \cap Y \ne \O \\ \O & : \Img f \cap Y = \O \end {cases}$
$\blacksquare$





