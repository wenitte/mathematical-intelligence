# 

Source: https://proofwiki.org/wiki/Characterization_of_Set_Equals_Union_of_Sets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $A$ be a set.
Let $\BB$ be a set of sets.

Then $A = \ds \bigcup \BB$ if and only if:

$\forall a \in A : \exists B \in \BB : a \in B$
$\forall B \in \BB : B \subseteq A$
Proof
Necessary Condition
Let $A = \ds \bigcup \BB$.
By definition of set union:

$\forall a \in A = \ds \bigcup \BB : \exists B \in \BB : a \in B$
From Set is Subset of Union:

$\forall B \in \BB : B \subseteq \ds \bigcup \BB = A$
$\Box$

Sufficient Condition
Let:

$\forall a \in A : \exists B \in \BB : a \in B$
$\forall B \in \BB : B \subseteq A$

From set union

$\forall a \in A : a \in \bigcup \BB$
By definition of subset:

$A \subseteq \bigcup \BB$

From Union of Subsets is Subset:

$\bigcup \BB \subseteq A$

By definition of set equality:

$A = \bigcup \BB$
$\blacksquare$





