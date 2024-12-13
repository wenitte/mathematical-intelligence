# 

Source: https://proofwiki.org/wiki/Nagata-Smirnov_Metrization_Theorem/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\BB = \ds \bigcup_{n \mathop \in \N} \BB_n$ be a $\sigma$-locally finite basis of $T$ where $\BB_n$ is locally finite set of subsets for each $n \in \N$.

Let $I = \set {\tuple {B, n} : B \in \BB, B \in \BB_n}$.
For each $\tuple {B, n} \in I$, let $f_{\tuple {B, n} }: S \to \closedint 0 1$:

$B = \set {x \in S : \map {f_{\tuple {B, n} }} x \ne 0}$

Then:

$\forall x \in S$ and $n \in \N$:
the generalized sum $\ds \sum_{B \mathop \in \BB_n} \map {f_{\tuple {B, n} }^2} x$ converges
Proof
Let $s \in S$ and $m \in \N$.

By definition of locally finite set of subsets:

$\exists U \in \tau : s \in U : \set {B \in \BB_m : B \cap U \ne \O}$ is finite
Hence:

$\set {B \in \BB_m : s \in B}$ is finite
It follows that:

$\set {\tuple {B, m} \in I : \map {f_{\tuple {B, m} } } s \ne 0}$ is finite

From Generalized Sum with Finite Non-zero Summands:

the generalized sum $\ds \sum_{B \mathop \in \BB_m} \map {f_{\tuple {B, m} }^2} s$ converges
The result follows.
$\blacksquare$





