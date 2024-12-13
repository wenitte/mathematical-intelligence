# 

Source: https://proofwiki.org/wiki/Meager_Sets_in_Arens-Fort_Space


It has been suggested that this page be renamed.In particular: Should this refer to meager subspaces? We have defined meager solely in terms of its own topology, not that of a superspace. Do we need to define "meager subspace" or can we specify that the subspace is meager under its own subspace topology? We need to make sure that this is a valid approach (e.g. is "meager" a hereditary property?)To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.
Let $A \subseteq S$.

Then $A$ is meager if and only if $A = \set {\tuple {0, 0} }$.


Proof
First let $A = \set {\tuple {0, 0} }$.
From the definition of Arens-Fort space, $\set {\tuple {0, 0} }$ is closed because $S \setminus \set {\tuple {0, 0} }$ is open.
From Closed Set Equals its Closure:

$\set {\tuple {0, 0} }^- = \set {\tuple {0, 0} }$
where $\set {\tuple {0, 0} }^-$ denotes the closure of $\set {\tuple {0, 0} }$.
From the definition of Arens-Fort space, $\set {\tuple {0, 0} }$ is not open.
Therefore the smallest open set contained in $\set {\tuple {0, 0} }$ is $\O$.
Hence:

$\set {\tuple {0, 0} }^\circ = \O$
where $\set {\tuple {0, 0} }^\circ$ denotes the interior of $\set {\tuple {0, 0} }$.
Thus we have that:

$\paren {\set {\tuple {0, 0} }^-}^\circ = \O$
and so by definition $\set {\tuple {0, 0} }$ is nowhere dense in $T$.
From Union of Singleton it trivially follows that $\set {\tuple {0, 0} }$ is the union of a countable set of subsets of $S$ (that is: just the one) which are nowhere dense in $S$.
Hence by definition $\set {\tuple {0, 0} }$ is meager.
$\Box$

Now assume $A \ne \set {\tuple {0, 0} }$.
Then $\exists x \in A: x \ne \tuple {0, 0}$. 
By definition of the Arens-Fort space, $\set x$ is open in $T$. 
Thus, from Interior of Open Set $\set x^\circ = \set x$.
Hence $\set x \subseteq \paren {\set x^-}^\circ$ and by definition is not nowhere dense in $T$.
So $A$ is not the union of a countable set of subsets of $S$ which are nowhere dense in $S$.
So, by definition, $A$ is not meager.
$\blacksquare$





