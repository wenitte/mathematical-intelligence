# 

Source: https://proofwiki.org/wiki/Condition_for_Valid_Time_Indication

Theorem
Consider an analogue clock $C$ with an hour hand $H$ and a minute hand $M$.
Let $\theta \degrees$ be the angle made by the minute hand with respect to twelve o'clock.
Let $\phi \degrees$ be the angle made by the hour hand with respect to twelve o'clock.

Then $C$ displays a valid time indication if and only if:

$12 \phi \mod 360 = \theta$


Corollary
Let $\theta \degrees$ be the angle made by the minute hand with respect to twelve o'clock.
Let $\rho \degrees$ be the angle made by the hour hand with respect to the hour just past.
Then $C$ displays a valid time indication if and only if:

$\rho = \dfrac \theta {12}$


Proof
Let $T$ be a time of day specified in hours $h$ and minutes $m$, where:

$1 \le h \le 12$ is an integer
$0 \le m < 60$ is a real number
whether a.m. or p.m. is immaterial.
From Speed of Minute Hand, $M$ travels $6 \degrees$ per minute.
So at time $m$ minutes after the hour, $\theta = 6 m$.
From Speed of Hour Hand, $H$ travels $\dfrac 1 2 \degrees$ per minute. 
The hour marks are at $30 \degrees$ intervals.
So at time $m$ minutes after the hour, $\phi = 30 h + \dfrac m 2 \degrees$ past hour $h$.
That is:

$\phi = 30 h + \dfrac 1 2 \dfrac \theta 6$
or:

$12 \phi = 360 h + \theta$
where $h$ is an integer.
Thus:

$12 \phi \mod 360 = \theta$
$\blacksquare$





