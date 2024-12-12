# 

Source: https://proofwiki.org/wiki/Circles_Touch_at_One_Point_at_Most



Theorem
In the words of Euclid:

A circle does not touch a circle at more points than one, whether it touch it internally or externally.
(The Elements: Book $\text{III}$: Proposition $13$)


Proof
Aiming for a contradiction, suppose it is possible for two circles to touch at more points than one.


First, let the circle $ABDC$ touch the circle $EBFD$ internally at more than one point, that is, at $B$ and $D$.
Let $G$ be the center of the circle $ABDC$, and $H$ be the center of the circle $EBFD$.
(It is clear that in the diagram these centers are not actually at $G$ and $H$, and in fact $EBFD$ is obviously not a circle - it is the point of this proof to demonstrate that this would not be possible.)
From Line Joining Centers of Two Circles Touching Internally the straight line $GH$ will pass through both $B$ and $D$.
Since $G$ is the center of the circle $ABDC$, we have:














\(\ds BG\)

\(=\)







\(\ds GD\)














\(\ds \leadsto \ \ \)





\(\ds BG\)

\(>\)







\(\ds HD\)














\(\ds \leadsto \ \ \)





\(\ds BH\)

\(\gg\)







\(\ds HD\)









But since $H$ is the center of the circle $EBFD$, we have that $BH = HD$.
But we have just shown that $BH \gg HD$, which is impossible.
Therefore a circle does not touch another circle internally at more than one point.

Next suppose the circle $ACK$ touches the circle $ABDC$ at more points than one, that is, at $A$ and $C$, and join $AC$.
The two points $A$ and $C$ fall on the circumference of both circles $ABDC$ and $ACK$.
So it follows from Chord Lies Inside its Circle that $AC$ lies with both circles.
But from Book $\text{III}$ Definition $3$: Tangent Circles this line would fall inside $ABDC$ and outside $ACK$.
This reveals a contradiction.
Therefore a circle does not touch another circle externally at more than one point.
$\blacksquare$


Historical Note
This proof is Proposition $13$ of Book $\text{III}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{III}$. Propositions




