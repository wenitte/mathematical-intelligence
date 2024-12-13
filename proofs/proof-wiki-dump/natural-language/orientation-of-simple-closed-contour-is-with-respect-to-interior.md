# 

Source: https://proofwiki.org/wiki/Orientation_of_Simple_Closed_Contour_is_with_Respect_to_Interior



Theorem
Let $C$ be a simple closed contour in the complex plane $\C$.
Let $\Int C$ denote the interior of $C$.

$C$ is positively oriented, if and only if $C$ is positively oriented with respect to $\Int C$.
$C$ is negatively oriented, if and only if $C$ is negatively oriented with respect to $\Int C$.


Proof
Sufficient condition
Suppose $C$ is positively oriented.
Let $\gamma : \closedint a b$ be a parameterization of $C$.
Set $K := \set { t \in \closedint a b : \textrm{ $\gamma$ is not differentiable at $t$ } }$.
By definition of positive orientation, it follows that for all $t \in \openint a b \setminus K$, there exists $r_0 \in \R_{>0}$ such that:

for all $\epsilon \in \openint 0 {r_0}$ : $\map \gamma t + \epsilon i \map {\gamma'} t \in \Int C$

Complex Plane is Homeomorphic to Real Plane shows that we can identify the complex plane $\C$ with the real plane $\R^2$ by the homeomorphism $\map \phi {x, y} = x + i y$.
Interior of Simple Closed Contour is Well-Defined shows that the image $\Img C$ can be identified with the image of a Jordan curve $g: \R^2 \to \R^2$.
From the same theorem, it follows that $\Int C$ can be identified with the interior of $g$.
From the Jordan Curve Theorem, it follows that $\Int C$ is an open connected set with $\Img C$ as its boundary.
It follows that $\Int C$ is a connected domain with $\Img C \subseteq \partial \Int C$, which is the first requirement for $C$ to be positively oriented with respect to $\Int C$.
The next requirement is that for all $t \in \openint a b \setminus K$, we need to find $r \in \R_{>0}$ such that:

for all $\epsilon \in \openint 0 r$ : $\map \gamma t + \epsilon i \map {\gamma'} t \in \Int C$, and $\map \gamma t - \epsilon i \map {\gamma'} t \notin \Int C$

From All Normal Vectors of Simple Closed Contour Cannot Point into Interior, it follows that there exists $r_1 \in \R_{>0}$ such that $\map \gamma t - \epsilon i \map {\gamma'} t \notin \Int C$ for all $\epsilon \in \openint 0 {r_1}$.
Then $r := \map \min {r_0 , r_1}$ fulfils the criteria.

When $C$ is negatively oriented, the proof is similar.
$\Box$


Necessary condition
This follows directly from the definitions of orientation of contour.
$\blacksquare$





