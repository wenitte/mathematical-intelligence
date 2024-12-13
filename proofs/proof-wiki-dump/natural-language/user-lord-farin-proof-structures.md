# 

Source: https://proofwiki.org/wiki/User:Lord_Farin/Proof_Structures



Induction
Proof by Mathematical Induction (type 1 - 'Normal' Induction)
The proof proceeds by induction on $n$, the describe the integer $n$.


Basis for the Induction
The case $n = n_0$ is verified as follows:

Reasoning for $n_0$
This is the basis for the induction.


Induction Hypothesis
Fix $n \in \N$ with $n \ge n_0$.
Assume to-be-proved property holds for $n$.
This is our induction hypothesis.


Induction Step
This is our induction step:

Insert reasoning. Whenever the induction hypothesis is used, write down explicitly that this is done.
When desired, use the reference induction hypothesis.

We conclude to-be-proved property holds for $n+1$.
The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Proof by Mathematical Induction (type 2 - Complete Induction)
The proof proceeds by induction on $n$, the describe the integer $n$.


Basis for the Induction
The case $n = n_0$ is verified as follows:

Reasoning for $n_0$
This is the basis for the induction.


Induction Hypothesis
Fix $n \in \N$ with $n \ge n_0$.
Assume to-be-proved property holds for all $k$ such that $n_0 \le k \le n$.
This is our induction hypothesis.


Induction Step
This is our induction step:

Insert reasoning. Whenever the induction hypothesis is used, write down explicitly that this is done.
When desired, use the reference induction hypothesis.

We conclude to-be-proved property holds for $n+1$.
The result follows by the Second Principle of Mathematical Induction.
$\blacksquare$


Notes to Induction Proofs
The above are only guidelines. In most cases, a different formulation is natural. Just use this as a template, so as to structure all induction proofs uniformly. Some proofs require induction to multiple variables. I haven't encountered such proofs on PW; when I do, I will put up a proof template.


Set Equality
Let $A$ be describe the set $A$.
Let $B$ be describe the set $B$.

Then $A = B$.


Proof of Set Equality (type 1 - Direct)
By definition of set equality, it suffices to prove $A \subseteq B$ and $B \subseteq A$.


$A$ is contained in $B$
Suppose that $x \in A$.
Insert reasoning
Hence $x \in B$. It follows that $A \subseteq B$.
$\Box$


$B$ is contained in $A$
Suppose now that $x \in B$.
Insert reasoning
Hence $x \in A$. It follows that $B \subseteq A$.
$\Box$

Therefore, we have established that $x \in B \iff x \in A$.
From the definition of set equality, it follows that $A = B$.
$\blacksquare$


Proof of Set Equality (type 2 - Indirect)
By [definition of set equality, it suffices to prove $A \subseteq B$ and $B \subseteq A$.
From Set Complement inverts Subsets, have:

$\complement \left({A}\right) \subseteq \complement \left({B}\right) \iff B \subseteq A$
Therefore, it suffices to prove $A \subseteq B$ and $\complement \left({A}\right) \subseteq \complement \left({B}\right)$.


$A$ is contained in $B$
Suppose that $x \in A$.
Insert reasoning
Hence $x \in B$. It follows that $A \subseteq B$.
$\Box$


$\complement \left({A}\right)$ is contained in $\complement \left({B}\right)$
Suppose now that $x \notin A$.
Insert reasoning
Hence $x \notin B$. It follows that $\complement \left({A}\right) \subseteq \complement \left({B}\right)$.
$\Box$

Therefore, we have established that $x \in B \iff x \in A$.
From the definition of set equality, we conclude that $A = B$.
$\blacksquare$


Notes to Set Equality Proofs
I am pretty sure no convention on this type of proof exists. Encountering some of these scattered around, I figured I'd give it a shot.


Iff
statement 1 $\iff$/iff statement 2

Iff Proof (type 1 - direct)
Necessary Condition
Suppose statement 1.
Insert reasoning
Hence statement 2.
$\Box$


Sufficient Condition
Suppose statement 2.
Insert reasoning
Hence statement 1.
$\blacksquare$


Iff Proof (type 2 - indirect)
From Rule of Transposition, we may replace the if / $\impliedby$ statement by its contrapositive.
Therefore, the following suffices:


Implication
Suppose statement 1.
Insert reasoning
Hence statement 2.
$\Box$


Contrapositive Implication
Suppose negation statement 1.
Insert reasoning
Hence negation statement 2.
$\blacksquare$

Notes to Iff Proofs
A third (also indirect) type is obtained by exchanging statement 1 and statement 2.
Be advised that I mixed up necessary and sufficient conditions in type 1. This has now been fixed. Lord_Farin 07:09, 7 November 2011 (CST)


General Notes
For further proof templates, cf. User:Prime.mover/Proof Structures.





