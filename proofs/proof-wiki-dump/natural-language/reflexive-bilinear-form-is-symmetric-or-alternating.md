# 

Source: https://proofwiki.org/wiki/Reflexive_Bilinear_Form_is_Symmetric_or_Alternating

Theorem
Let $\mathbb K$ be a field.
Let $V$ be a vector space over $\mathbb K$.
Let $f$ be a bilinear form on $V$.
Let $f$ be reflexive.

Then $f$ is symmetric or alternating.


Proof
Let $x, y, z \in V$.

Because $f$ is bilinear:

$\map f {x, \map f {x, y} z - \map f {x, z} y} = \map f {x, y} \, \map f {x, z} - \map f {x, z} \, \map f {x, y} = 0$
Because $f$ is reflexive:

$\map f {\map f {x, y} z - \map f {x, z} y, x} = 0$
Because $f$ is bilinear:

$(1): \quad \map f {x, y} \, \map f {z, x} = \map f {x, z} \, \map f {y, x}$
Letting $z = x$, we obtain:

$\map f {x, x} \, \map f {x, y} = \map f {x, x} \, \map f {y, x}$
Thus:

$(2): \quad$ if $\map f {x, x} \ne 0$, then $\map f {x, y} = \map f {y, x}$ for all $y \in V$.

Suppose $f$ is not symmetric.
We show that $\map f {u, u} = 0$ for all $u \in V$.
Let $v, w \in V$ with $\map f {v, w} \ne \map f {w, v}$.
By $(2)$, $\map f {v, v} = \map f {w, w} = 0$.
Suppose $u \in V$ with $\map f {u, u} \ne 0$.
By $(2)$, $\map f {u, v} = \map f {v, u}$ and $\map f {u, w} = \map f {w, u}$.
By $(1)$, we have:

$\begin{cases} \map f {v, w} \, \map f {u, v} = \map f {v, u} \, \map f {w, v} \\ \map f {w, v} \, \map f {u, w} = \map f {w, u} \, \map f {v, w} \end{cases}$.
Because $\map f {v, w} \ne \map f {w, v}$:

$\begin{cases} \map f {u, v} = \map f {v, u} = 0 \\ \map f {u, w} = \map f {w, u} = 0 \end{cases}$.
Because $f$ is bilinear, $\map f {u + v, w} = \map f {v, w} \ne \map f {v, w} = \map f {u + v, w}$.
By $(2)$, $\map f {u + v, u + v} = 0$.
Because $f$ is bilinear and $\map f {u, v} = \map f {v, u} = \map f {v, v} = 0$, $\map f {u, u} = 0$.
This contradicts the assumption $\map f {u, u} \ne 0$.
Thus $f$ is alternating.
$\blacksquare$


Also see
Bilinear Form is Reflexive iff Symmetric or Alternating




