# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Open_Set_(Complex_Analysis)



Theorem
The following definitions of the concept of Open Subset of Complex Plane are equivalent:

Definition 1
Let $S \subseteq \C$ be a subset of the set of complex numbers.
Let:

$\forall z_0 \in S: \exists \epsilon \in \R_{>0}: N_{\epsilon} \left({z_0}\right) \subseteq S$
where $N_{\epsilon} \left({z_0}\right)$ is the $\epsilon$-neighborhood of $z_0$ for $\epsilon$.

Then $S$ is an open set (of $\C$), or open (in $\C$).

Definition 2
Let $S \subseteq \C$ be a subset of the set of complex numbers.
Then $S$ is an open set (of $\C$), or open (in $\C$) if and only if every point of $S$ is an interior point.


Proof
Let $S \subseteq \C$.


Definition 1 implies Definition 2
Let $S$ be an open set in $\C$ by definition 1.
That is:

$\forall z_0 \in S: \exists \epsilon \in \R_{>0}: N_{\epsilon} \left({z_0}\right) \subseteq S$
Thus every point in $S$ has an $\epsilon$-neighborhood $N_{\epsilon} \left({z_0}\right)$ such that $N_{\epsilon} \left({z_0}\right) \subseteq S$.

That is, by definition, every point of $S$ is an interior point.
Thus $S$ is an open set in $\C$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $S$ be an open set in $\C$ by definition 2.
That is, every point of $S$ is an interior point.
This means:

$\forall z_0 \in S: \exists \epsilon \in \R_{>0}: N_{\epsilon} \left({z_0}\right) \subseteq S$
Thus $S$ is an open set in $\C$ by definition 1.
$\blacksquare$





