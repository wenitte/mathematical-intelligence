# 

Source: https://proofwiki.org/wiki/Principle_of_Conservation_of_Angular_Momentum



Theorem
Newton's Laws of Motion imply the conservation of angular momentum in systems of masses in which no external force is acting.


Proof
We start by stating Newton's Third Law of Motion in all its detail.
We consider a collection of massive bodies denoted by the subscripts $1$ to $N$.
These bodies interact with each other and exert forces on each other and these forces occur in equal and opposite pairs.
The force $F_{i j}$ exerted by body $i$ on body $j$ is related to the force exerted by body $j$ on body $i$ by:

$(1): \quad \vec {F_{i j}} = -\vec {F_{j i} }$
The final part of Newton's Third Law of Motion is that these equal and opposite forces act through the line that connects the two bodies in question.
This can be stated thus:

$(2): \quad \vec {F_{i j}} = a_{i j} \paren {\vec {r_j} - \vec {r_i} }$
where:

$\vec{r_i}$ is the position of body $i$
$a_{i j} $ is the magnitude of the force.
As a consequence of $(1)$:

$a_{j i} = a_{i j}$

Let the total torque $\vec {\tau_{\operatorname {total} } }$ on the system be measured about an origin located at $\vec {r_0}$.

Thus:














\(\ds \vec {\tau_{\operatorname {total} } }\)

\(=\)







\(\ds \sum_i \vec{\tau_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_i \paren {\paren {\vec {r_i} - \vec {r_0} } \times \sum_j \vec {F_{j i} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j} \paren {\paren {\paren {\vec {r_j} - \vec {r_0} } - \paren {\vec {r_j} - \vec {r_i} } } \times \vec {F_{j i} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j} \paren {\paren {\paren {\vec {r_j} - \vec {r_0} } - \paren {\vec {r_j} - \vec {r_i} } } \times a_{i j} \paren {\vec {r_j} - \vec {r_i} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j} \paren {\vec {r_j} - \vec {r_0} } \times  a_{i j} \paren {\vec {r_j} - \vec {r_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j} \vec {r_j} \times  a_{i j} \paren {\vec {r_j} - \vec {r_i} } - \paren {\vec {r_0} \times \sum_{i, j} \vec {F_{i j} } }\)










We have by hypothesis that there is no external force.
Thus the second term disappears, and:














\(\ds \vec {\tau_{\operatorname {total} } }\)

\(=\)







\(\ds \sum_{i, j} \vec {r_j} \times a_{i j} \paren {\vec {r_j} - \vec {r_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop > j} \vec {r_j} \times a_{i j} \paren {\vec {r_j} - \vec {r_i} } + \vec {r_i} \times  a_{j i} \paren {\vec {r_j} - \vec {r_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop > j} \vec {r_j} \times \vec {r_i} \paren {a_{j i} - a_{i j} }\)




















\(\ds \)

\(=\)







\(\ds \vec 0\)










In summary, in a system of masses in which there is no external force, the total torque on the system is equal to $0$.
This is because the pair of torque between two bodies must cancel out.
Since the rate of change of angular momentum is proportional to the torque, the angular momentum of a system is conserved when no external force is applied.
$\blacksquare$


Also known as
The Principle of Conservation of Angular Momentum is also known as the Law of Conservation of Angular Momentum.
Some sources refer merely to Conservation of Angular Momentum.


Examples
Rotating Cloud of Gas
Let $\CC$ be a rotating cloud of gas in space.
Suppose $\CC$ is contracting under its own gravitation.
Then it rotates with a greater angular velocity as it contracts, so as to preserve its angular momentum.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): angular momentum (moment of momentum)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): conservation of momentum
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): angular momentum (moment of momentum)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conservation of momentum




