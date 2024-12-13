# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Upper_Adjoint_to_Direct_Image_Mapping


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S, T$ be sets.
Let $f: S \to T$ be a mapping.

Let $f^\to : \powerset S \to \powerset T$ denote the direct image mapping.
Let $f^\gets : \powerset T \to \powerset S$ denote the inverse image mapping.

Then:

$f^\gets : \powerset T \to \powerset S$ is the upper adjoint to $f^\to : \powerset S \to \powerset T$

That is:

$\forall A \subseteq S, B \subseteq T : A \subseteq \map {f^\gets} B$ if and only if $\map {f^\to} A \subseteq B$
Proof
From Image is Subset Iff Subset of Preimage:

$\forall A \subseteq S, B \subseteq T : f \sqbrk A \subseteq B$ if and only if $A \subseteq f^{-1} \sqbrk B$

By definition of direct image mapping:

$\forall A \subseteq S : \map {f^\to} A = f \sqbrk A$
By definition of inverse image mapping:

$\forall B \subseteq T : \map {f^\gets} B = f^{-1} \sqbrk B$
Hence:

$\forall A \subseteq S, B \subseteq T : A \subseteq \map {f^\gets} B$ if and only if $\map {f^\to} A \subseteq B$

By definition of Galois connection:

$\tuple{f^\gets, f^\to}$ is a Galois connection
It follows that $f^\gets : \powerset T \to \powerset S$ is the upper adjoint to $f^\to : \powerset S \to \powerset T$
$\blacksquare$





