# 

Source: https://proofwiki.org/wiki/Independent_Set_can_be_Augmented_by_Larger_Independent_Set/Corollary


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $X \subseteq S$ be an independent subset of $M$.
Let $B \subseteq S$ be a base of $M$.
Then:

$\exists Z \subseteq B \setminus X : \card{X \cup Z} = \card B  : X \cup Z$ is a base of $M$


Proof
From Cardinality of Independent Set of Matroid is Smaller or Equal to Base:

$\card X \le \card B$
Case 1: $\card X < \card B$
From Independent Set can be Augmented by Larger Independent Set:

$\exists Z \subseteq B \setminus X : X \cup Z \in \mathscr I : \card {X \cup Z} = \card B$
$\Box$

Case 2: $\card X = \card B$
Let $Z = \O$.
Then:

$Z \subseteq B \setminus X : X \cup Z \in \mathscr I : \card {X \cup Z} = \card B$
$\Box$
From Independent Subset is Base if Cardinality Equals Cardinality of Base:

$X \cup Z$ is a base of $M$
$\blacksquare$





