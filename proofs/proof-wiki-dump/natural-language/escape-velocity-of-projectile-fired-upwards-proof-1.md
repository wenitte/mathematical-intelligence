# 

Source: https://proofwiki.org/wiki/Escape_Velocity_of_Projectile_fired_Upwards/Proof_1

Theorem
Let $P$ be a planet.
Let $P$ have an Acceleration Due to Gravity at its surface of $g$.
Let $P$ have a radius of $R$.

Then the escape velocity of $P$ is given by:

$V = \sqrt {2 g R}$


Proof
Let a projectile $B$ of mass $m$ be fired vertically upwards from the surface of $P$ at such a speed that it escapes the gravitational field of $P$ completely.
$F$ be the force exerted on the projectile by the gravitational field of $P$.
Let $x$ be the distance of $B$ from the surface of $P$ at time $t$.
We have:

$F = -\dfrac k {x^2}$
where $k$ can be calculated at the surface of $P$ as:














\(\ds F\)

\(=\)







\(\ds m g\)




















\(\ds \)

\(=\)







\(\ds \dfrac k {R^2}\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(=\)







\(\ds R^2 m g\)










Thus:

$F = -\dfrac {m g R^2} {x^2}$
Let the $B$ be travelling away from $P$ with speed $v$ at time $t$.
Thus:














\(\ds F\)

\(=\)







\(\ds -m \frac {\d v} {\d t}\)














\(\ds \leadsto \ \ \)





\(\ds -\frac {m g R^2} {x^2}\)

\(=\)







\(\ds m v \frac {\d v} {\d x}\)









So:

$\ds -\int \frac {R^2 g} {x^2} \rd x = \int v \rd v$
This gives:

$\dfrac {R^2 g} x = \dfrac {v^2} 2 + C$
Now when $x = R$, $v = v_0$, the launch velocity, which leads to:

$C = R g - \dfrac {v_0^2} 2$
and so:

$\dfrac {v^2} 2 = \dfrac {R^2 g} x - R g + \dfrac {v_0^2} 2$
For $\dfrac {v^2} 2 > 0$ we need:

$\dfrac {v_0^2} 2 > R g \paren {1 - \dfrac R x}$
whatever $x$ may be.
So when $x \to \infty$ we have:

$\dfrac {v_0^2} 2 > R g$
Hence:

$v_0 > \sqrt {2 R g}$
$\blacksquare$





